<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Models\File\File;
use App\Models\Inventory\Item;
use App\Services\Inventory\ItemService;
use App\Traits\FileUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ItemController extends Controller
{
    use FileUpload;

    public $service;

    /**
     * MasterUserController constructor.
     */
    public function __construct(ItemService $service)
    {
        $this->service = $service;
//        $this->middleware(['direct_permission:Roles-index'])->only(['index', 'show', 'permissionRole']);
//        $this->middleware(['direct_permission:Roles-store'])->only(['store', 'storePermissionRole']);
//        $this->middleware(['direct_permission:Roles-edits'])->only('update');
//        $this->middleware(['direct_permission:Roles-erase'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        $result = [];
        $result['form'] = $this->form('items');
        $result['form']['temp_id'] = mt_rand(100000, 999999999999);
        $result['url'] = url('/');
        $result = array_merge($result, $this->service->index($request));

        return $this->success($result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if ($this->validation($request)) {
            return $this->error($this->validation($request), 422, [
                "errors" => true
            ]);
        }

        DB::beginTransaction();
        try {
            $category = $request->category;

            $item = Item::create($this->service->formData($request, 'store'));

            $this->processItemDetails($category, $item['id']);

            DB::commit();
            return $this->success([
                "errors" => false
            ], 'Data inserted!');
        } catch (\Exception $exception) {
            DB::rollBack();
            return $this->error($exception->getMessage(), 422, [
                "errors" => true,
                "Trace" => $exception->getTrace()
            ]);
        }
    }

    /**
     * @param $category
     * @param $id
     * @return void
     */
    protected function processItemDetails($category, $id)
    {
        $this->service->processItemCategory($category, $id);

        // this->checkFile($category, $id);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($product)
    {
        $data = Item::where("product_id", "=", $product)->first();

        return $this->success([
            'rows' => $data
        ]);
    }

    /**
     * @param $request
     * @return false|string
     */
    protected function validation($request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        $string_data = "";
        if ($validator->fails()) {
            foreach (collect($validator->messages()) as $error) {
                foreach ($error as $items) {
                    $string_data .= $items . " \n  ";
                }
            }
            return $string_data;
        } else {
            return false;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
//        if ($this->validation($request)) {
//            return $this->error($this->validation($request), 422, [
//                "errors" => true
//            ]);
//        }

        DB::beginTransaction();
        try {
            $category = $request->category;

            $item = Item::where("id", "=", $id)
                ->update($this->service->formData($request, 'update', $id));

            $this->processItemDetails($category, $id);

            DB::commit();

            return $this->success([
                "errors" => false
            ], 'Data updated!');
        } catch (\Exception $exception) {
            DB::rollBack();

            return $this->error($exception->getMessage(), 422, [
                "errors" => true,
                "Trace" => $exception->getTrace()
            ]);
        }
    }

    /**
     * @param $request
     * @param $id
     * @return void
     */
    protected function checkFile($request, $id)
    {
        $file = File::where('fileable_type', 'item');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $details = Item::where("product_id", "=", $id)->first();
        if ($details) {
            Item::where("product_id", "=", $id)->delete();
            return $this->success([
                "errors" => false
            ], 'Row deleted!');
        }

        return $this->error('Row not found', 422, [
            "errors" => true
        ]);
    }
}
