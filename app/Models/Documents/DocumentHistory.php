<?php

namespace App\Models\Documents;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class DocumentHistory extends Model
{
    use HasFactory;

    use RevisionableTrait;

    protected $guarded = [];
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 500;
    protected $revisionForceDeleteEnabled = true;
}
