<?php

/**
 * @package Flarum UiKit
 * @author Sami 'SychO' Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\UiKit\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extend\Frontend;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class Register implements ExtenderInterface
{
    /**
     * @var bool
     */
    public static $registered = false;

    /**
     * @var Frontend
     */
    private $forumFrontend;

    /**
     * @var Frontend
     */
    private $adminFrontend;

    public function __construct()
    {
        $this->forumFrontend = (new Frontend('forum'))
            ->js(__DIR__.'/../../js/dist/forum.js')
            ->css(__DIR__.'/../../less/forum.less');

        $this->adminFrontend = (new Frontend('admin'))
            ->js(__DIR__.'/../../js/dist/admin.js')
            ->css(__DIR__.'/../../less/admin.less');
    }

    public function extend(Container $container, Extension $extension = null)
    {
        if (static::$registered) {
            return;
        }

        $this->forumFrontend->extend($container, $extension);
        $this->adminFrontend->extend($container, $extension);

        static::$registered = true;
    }
}
