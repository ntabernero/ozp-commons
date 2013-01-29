/*
 * Copyright 2013 Next Century Corporation 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    'views/View',

    // Libraries.
    'jquery',
    'lodash',
    'handlebars',
    'bootstrap/bootstrap-modal'
],

function(View, $, _, Handlebars) {
    var template =   Handlebars.compile(
                        '{{#if title}}' + 
                            '<div class="modal-header">' + 
                                '{{#if closable}}' + 
                                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                                '{{/if}}' + 
                                '<h4>{{title}}</h4>' +
                            '</div>' +
                        '{{/if}}' +

                        '<div class="modal-body">{{content}}</div>' +

                        '{{#if footer}}' + 
                            '<div class="modal-footer">' +
                                '{{#if cancelText}}' + 
                                    '<a href="#" data-dismiss="modal" class="btn cancel">{{cancelText}}</a>' +
                                '{{/if}}' + 
                                '<a href="#" class="btn btn-primary ok">{{okText}}</a>' +
                            '</div>' +
                        '{{/if}}'
                    );

    /**
     * Bootstrap Modal wrapper for use with Backbone.uk>
     *
     * Events:
     * shown: Fired when the modal has finished animating in
     * hidden: Fired when the modal has finished animating out
     */
    var ModalView = View.extend({

        className: 'modal hide',

        events:  {
            'click .cancel': 'cancel',
            'click .ok': 'ok'
        },

        /**
         * Creates an instance of a Bootstrap Modal
         *
         * @see http://twitter.github.com/bootstrap/javascript.html#modals
         *
         * @param {Object} options
         * @param {String} [options.title]              Title. Default: none
         * @param {String|Method} [options.content]     Modal content. Default: none
         * @param {String|Method} [options.closable]    'X' button in the header. Default: true

         * @param {Boolean} [options.escape]            Closes the modal when escape key is pressed. Default: true
         * @param {String} [options.backdrop]           Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click. Default: true
         * @param {String} [options.removeOnClose]      Remove view from DOM on close. Default: false

         * @param {String} [options.footer]             Whether to show footer. Default: true
         * @param {String} [options.okText]             Text for the OK button. Default: 'OK'
         * @param {String} [options.cancelText]         Text for the cancel button. Default: 'Cancel'. If passed a falsey value, the button will not be shown.
         
         * @param {Boolean} [options.animate]           Animates modal. Default: true
         */
        initialize: function () {
            var me = this;

            _.extend(this, {
                title: false,
                closable: true,
                escape: true,
                backdrop: true,
                removeOnClose: false,
                footer: true,
                okText: 'OK',
                cancelText: 'Cancel',
                animate: true
            }, this.options);

            this.animate && this.$el.addClass('fade');

            this.$el.on('hidden', function() {
                me.trigger('hidden');
                me.removeOnClose && me.remove();
            });

            this.$el.on('shown', function() {
                me.trigger('shown');
            });
        },
        
        render: function  () {
            this.$el.html( template(this) );
            this.$body = $('.modal-body', this.$el);
            this.isRendered = true;

            return this;
        },


        /*
         *Override to handle click on OK button.
         */
        ok: $.noop,

        /*
         * Override to handle click on cancel button.
         */
        cancel: $.noop,

        /*
         * Show window. If render is not called before, view is added to body.
         */
        show: function() {
            var dfd = $.Deferred();

            if(!this.isRendered) {
                $('body').append(this.render().el);
            }

            this.$el.one('shown', function () {
                dfd.resolve();
            }).modal({
                show: true,
                keyboard: this.escape,
                backdrop: this.backdrop
            });

            return dfd.promise();
        },

        /*
         * Hide window.
         */
        hide: function() {
            var me = this,
                dfd = $.Deferred();

            this.$el.one('hidden', function () {
                dfd.resolve();
            }).modal('hide');

            return dfd.promise();
        }
    });

    return ModalView;
});
