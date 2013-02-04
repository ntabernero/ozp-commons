define([
    'jqueryatmosphere'
], 

function($){
	
    'use strict';
    
    var socket = $.atmosphere;
    var request = { 
    	url: null, //Initial 
        contentType : "application/json",
        logLevel : 'debug',
        transport : 'websocket' ,
        fallbackTransport: 'long-polling'
     };
    
    function AtmosphereBus(url){
    	var me = this;
    	
    	me.socket = socket;
    	me.request = request;
    	me.request.url = url ? url : document.location.toString() + 'pubsub';
    }
    
    AtmosphereBus.prototype.onOpen = function(objs, handleFunction){
    	var me = this;
    	
    	me.request.onOpen = function(response){
			//alert('Atmosphere connected using ' + response.transport);
			if(typeof handleFunction == 'function' ){
				handleFunction.apply(me, [response, objs]);
			}
		}
	};
	
	AtmosphereBus.prototype.onMessage = function(objs, handleFunction){
		var me = this;
		
		me.request.onMessage = function (response) {
			var message = response.responseBody;
			//alert("message: " + message);
			//alert("message.data: " + message.data);
			//$.stringifyJSON to handle json conversion...
			if(typeof handleFunction == 'function' ){
				handleFunction.apply(me, [response, objs]);
			}
		};
	};
	
	AtmosphereBus.prototype.onError = function(objs, handleFunction){
    	var me = this;
    	
    	me.request.onError = function(response){
			//alert('Sorry, but there\'s some problem with your '
            //+ 'socket or the server is down');
			if(typeof handleFunction == 'function' ){
				handleFunction.apply(me, [response, objs]);
			}
		}
	};
	
	AtmosphereBus.prototype.onClose = function(objs, handleFunction){
    	var me = this;
    	
    	me.request.onClose = function(response){
			//alert('Closing connection...');
			if(typeof handleFunction == 'function' ){
				handleFunction.apply(me, [response, objs]);
			}
		}
	};
	
	
	AtmosphereBus.prototype.publish = function(msg){
    	var me = this;
    	//Author is not used at this time...
    	me.subSocket.push("message=" + msg);
	};
	
	AtmosphereBus.prototype.subscribe = function(topic){
		var me = this;
		
		me.request.url = me.request.url + "/" + topic;
		
		//Connect
		me.subSocket = socket.subscribe(request);
	};
	
	return AtmosphereBus;

});