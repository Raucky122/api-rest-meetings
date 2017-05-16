/**
 * BlueJeans onVideo REST API
 * _Video That Works Where You Do._  This site provides developers access to API's from BlueJean's onVideo meeting service.  From here you will be able to make actual API calls to manage User Accounts, Meetings, and Recordings.  Also, you can pull analytical data as well retrieve current state information.  With these API's  you should be able to quickly integrate **BlueJeans** video into your applications.     # Authentication All API transactions (excluding Authentication) require an access token per **OAuth standards**.  BlueJeans provides multiple methods for obtaining an access token.  Additionally there are diffferent scopes of token access. ## Grant Types Bluejeans provides 4 different methods for users to Authenticate.  Successful authentication allows BlueJeans to grant an access token to perform operations. * Password Credentials Grant – Authenticate with a username and password and receive an access token with user level permission. Known as two-legged OAuth. * Meeting Credentials Grant – Authenticate with a meeting ID and meeting passcode and receive an access token with meeting level permission. Known as two-legged OAuth. * Client Credentials Grant –  Authenticate with a client ID and client secret and receive an access token with enterprise level permission. Known as two-legged OAuth. * Authorization Code Grant – After creating a developer application, users witll authenticate via a BlueJeans page, and receive an authorization code. Submit authorization with other tokens and receive an access token. Known as three-legged OAuth. ## Access & Permissions BlueJeans defines 3 levels of API access into the system.  When an access token is granted, it carries one of these 3 levels.  The scope of system functionality depends upon the token's access level. * Meeting-level – Scope of APIs is limited to individual meetings. * User-level – Scope depends on the requested permissions. * App-level – provisioned either by BlueJeans personnel, or the BlueJeans Enterprise Admin, an app, is issued a client key and secret key. These tokens then are used by the BlueJeans Authentication API to receive the token. The token's scope provides access to the entire enterprise and all of its users. All endpoints in this document that require **Enterprise Admin** access will be marked as such. # Getting Started Before you start using the API's on this site, you must first have a BlueJeans account.  With your BlueJean credentials, use one of the Authentication methods to obtain an access token. - Click on the Authorize button at the top of page - Enter your access token in the field marked \"api_key\" Now the web site will automatically include your access token on all API calls you make. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BlueJeansOnVideoRestApi);
  }
}(this, function(expect, BlueJeansOnVideoRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BlueJeansOnVideoRestApi.EndpointsInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EndpointsInner', function() {
    it('should create an instance of EndpointsInner', function() {
      // uncomment below and update the code to test EndpointsInner
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be.a(BlueJeansOnVideoRestApi.EndpointsInner);
    });

    it('should have the property meetingid (base name: "meetingid")', function() {
      // uncomment below and update the code to test the property meetingid
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property callQuality (base name: "CallQuality")', function() {
      // uncomment below and update the code to test the property callQuality
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property leader (base name: "Leader")', function() {
      // uncomment below and update the code to test the property leader
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property callguid (base name: "callguid")', function() {
      // uncomment below and update the code to test the property callguid
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property endpoint (base name: "endpoint")', function() {
      // uncomment below and update the code to test the property endpoint
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property talkDetected (base name: "TalkDetected")', function() {
      // uncomment below and update the code to test the property talkDetected
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property secureCall (base name: "SecureCall")', function() {
      // uncomment below and update the code to test the property secureCall
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property layout (base name: "Layout")', function() {
      // uncomment below and update the code to test the property layout
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property subLayout (base name: "SubLayout")', function() {
      // uncomment below and update the code to test the property subLayout
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoRecv (base name: "VideoRecv")', function() {
      // uncomment below and update the code to test the property videoRecv
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoRecvLocalMute (base name: "VideoRecvLocalMute")', function() {
      // uncomment below and update the code to test the property videoRecvLocalMute
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoRecvRemoteMute (base name: "VideoRecvRemoteMute")', function() {
      // uncomment below and update the code to test the property videoRecvRemoteMute
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property audioRecv (base name: "AudioRecv")', function() {
      // uncomment below and update the code to test the property audioRecv
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property audioRecvLocalMute (base name: "AudioRecvLocalMute")', function() {
      // uncomment below and update the code to test the property audioRecvLocalMute
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property audioRecvRemoteMute (base name: "AudioRecvRemoteMute")', function() {
      // uncomment below and update the code to test the property audioRecvRemoteMute
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property audioRecvCodec (base name: "AudioRecvCodec")', function() {
      // uncomment below and update the code to test the property audioRecvCodec
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property audioSendCodec (base name: "AudioSendCodec")', function() {
      // uncomment below and update the code to test the property audioSendCodec
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoRecvCodec (base name: "VideoRecvCodec")', function() {
      // uncomment below and update the code to test the property videoRecvCodec
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoRecvHeight (base name: "VideoRecvHeight")', function() {
      // uncomment below and update the code to test the property videoRecvHeight
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoRecvWidth (base name: "VideoRecvWidth")', function() {
      // uncomment below and update the code to test the property videoRecvWidth
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoSendCodec (base name: "VideoSendCodec")', function() {
      // uncomment below and update the code to test the property videoSendCodec
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoSendHeight (base name: "VideoSendHeight")', function() {
      // uncomment below and update the code to test the property videoSendHeight
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property videoSendWidth (base name: "VideoSendWidth")', function() {
      // uncomment below and update the code to test the property videoSendWidth
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property chatEndpointGuid (base name: "chatEndpointGuid")', function() {
      // uncomment below and update the code to test the property chatEndpointGuid
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property endpointGuid (base name: "endpointGuid")', function() {
      // uncomment below and update the code to test the property endpointGuid
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property rDCVersion (base name: "RDCVersion")', function() {
      // uncomment below and update the code to test the property rDCVersion
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property rDCControllerCapable (base name: "RDCControllerCapable")', function() {
      // uncomment below and update the code to test the property rDCControllerCapable
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property rDCControlleeCapable (base name: "RDCControlleeCapable")', function() {
      // uncomment below and update the code to test the property rDCControlleeCapable
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instane = new BlueJeansOnVideoRestApi.EndpointsInner();
      //expect(instance).to.be();
    });

  });

}));