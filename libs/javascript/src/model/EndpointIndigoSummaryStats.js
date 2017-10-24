/**
 * BlueJeans Meetings REST API
 *  ## Video That Works Where You Do. This site provides developers access to APIs from BlueJean's Meetings meeting service.  From here you will be able to make actual API calls to manage User Accounts, Meetings, and Recordings.  Also, you can pull analytical data and current state information. With these APIs you can quickly integrate **BlueJeans** video administration into your applications.   <hr>  <h2 class=\"info\"> What is a BlueJeans Meeting?</h2> <img src=\"./img/bjnmeeting.png\" style=\"padding-left:20px; width:50%\">  A BlueJeans meeting is a collaboration session of 2 or more participants joining a virtual meeting-room in the cloud.   The first person to join is put into a waiting-room until other participant(s) join.  When the meeting starts, all participants will be connected over video & audio.  <u>Types of Meeting Rooms</u> There are two types of Meeting Rooms available to a registered user.  They are described as: <ul> <li>Scheduled – A room created for a specific date and time.  It is assigned a randomized and unique numeric ID by BlueJeans.</li> <li>Personal – Every user is given a personal meeting room with a customized Meeting Identifier.  People typically use their mobile phone number as their Meeting ID.</li> </ul> <u>Meeting Room Security</u> A meeting room can <i>optionally</i> be protected by a randomized access code.  THe access code ensures security of participants who join.  Also the access code can specify a Moderator role whose user(s) have additional capabilities to administer a meeting. <ul> <li>When set, participants would be required to enter the access code in order to join.</li> <li>The scheduler's profile has a user-specified moderator passcode which can be input to allow designated user(s) greater privileges to help organize meetings.</li> </ul> <hr>  <h2 id='gs' class=\"info\" onclick=\"hideit('gs')\"><span id=\"gsicon\" class=\"glyphicon glyphicon-chevron-right\"></span> Getting Started</h2> <div id=\"gsbody\" style=\"display:none\"> Before you start using BlueJeans' APIs, you must first have a BlueJeans account enabled for API Access.  Contact <a href=\"mailto:Support@BlueJeans.com)\">BlueJeans Support</a> for assistance.  <br /><br />Once you have an account, you may start writing application code to authenticate and make API calls.  *Alternatively*, you can use this developer site to test the BlueJeans' APIs and develop a level of familiarity before you write production code.  <br />  ### To Make API Calls from This Site If you want to use this developer site to try various BlueJeans' APIs, here are the steps required to authenticate and enable your Developer Session to place API calls. 1. Choose Method for Authenticating      * Click on the desired Authentication method from below.      * Click on the **Try It Out** button. 1. Make Authentication request      * Follow APIs instructions and input the API parameters.      * Click on the blue **Execute** button.      * If successful, the API returns with JSON data containing a field called **access_token**.  Copy/save this value. 1. Authorize BlueJeans Developer Session.      * Click on the green **Authorize button**.       * The site will show you a pop-up window for authorization.      * Enter your access token in the field named **api_key**      * Click on the **Authorize** button  Your current BlueJeans developer session is now authenticated and ready to place API calls.  The web site will automatically include your access token on any API calls you make. </div> <hr>  <h2 id='oauth' class=\"info\" onclick=\"hideit('oauth')\"><span id=\"oauthicon\" class=\"glyphicon glyphicon-chevron-right\"></span> About Meetings Authentication</h2>  <div id=\"oauthbody\" style=\"display:none\">  All API transactions (excluding Authentication) require an access token per **OAuth standards**.  BlueJeans provides multiple methods for obtaining an access token.  Additionally there are diffferent scopes of token access. ### Grant Types Bluejeans provides 4 different methods for users to Authenticate.  Successful authentication allows BlueJeans to grant an access token to perform API operations. * Password Credentials Grant – Authenticate with a username and password and receive an access token with user level permission. Known as two-legged OAuth. * Meeting Credentials Grant – Authenticate with a meeting ID and meeting passcode and receive an access token with meeting level permission. Known as two-legged OAuth. * Client Credentials Grant –  Authenticate with a client ID and client secret and receive an access token with enterprise level permission. Known as two-legged OAuth. * Authorization Code Grant – Authentication for your developer's application occurs through a redirection to a BlueJeans authentication page. The application receives an authorization code to be submitted, along with other tokens, to receive an access token. Known as three-legged OAuth. For more information please refer to the [OAuth specification](https://oauth.net/). ### Access & Permissions BlueJeans defines 3 levels of API access into the system.  When an access token is granted, it carries one of these 3 levels.  The scope of system functionality depends upon the token's access level. * Meeting-level – Scope of APIs is limited to individual meetings. * User-level – Scope depends on the requested permissions. * App-level – provisioned either by BlueJeans personnel, or the BlueJeans Enterprise Admin, an app, is issued a client key and secret key. These tokens then are used by the BlueJeans Authentication API to receive the token. The token's scope provides access to the entire enterprise and all of its users. All endpoints in this document that require **Enterprise Admin** access will be marked as such. </div> <hr> 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansOnVideoRestApi) {
      root.BlueJeansOnVideoRestApi = {};
    }
    root.BlueJeansOnVideoRestApi.EndpointIndigoSummaryStats = factory(root.BlueJeansOnVideoRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EndpointIndigoSummaryStats model module.
   * @module model/EndpointIndigoSummaryStats
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EndpointIndigoSummaryStats</code>.
   * @alias module:model/EndpointIndigoSummaryStats
   * @class
   */
  var exports = function() {
    var _this = this;


















































































































































  };

  /**
   * Constructs a <code>EndpointIndigoSummaryStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EndpointIndigoSummaryStats} obj Optional instance to populate.
   * @return {module:model/EndpointIndigoSummaryStats} The populated <code>EndpointIndigoSummaryStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audioRecvCodec')) {
        obj['audioRecvCodec'] = ApiClient.convertToType(data['audioRecvCodec'], 'String');
      }
      if (data.hasOwnProperty('audioSendCodec')) {
        obj['audioSendCodec'] = ApiClient.convertToType(data['audioSendCodec'], 'String');
      }
      if (data.hasOwnProperty('contentRecv')) {
        obj['contentRecv'] = ApiClient.convertToType(data['contentRecv'], 'Boolean');
      }
      if (data.hasOwnProperty('contentSend')) {
        obj['contentSend'] = ApiClient.convertToType(data['contentSend'], 'Boolean');
      }
      if (data.hasOwnProperty('talkDetected')) {
        obj['talkDetected'] = ApiClient.convertToType(data['talkDetected'], 'Boolean');
      }
      if (data.hasOwnProperty('sessionRelay')) {
        obj['sessionRelay'] = ApiClient.convertToType(data['sessionRelay'], 'Boolean');
      }
      if (data.hasOwnProperty('sessionInRelay')) {
        obj['sessionInRelay'] = ApiClient.convertToType(data['sessionInRelay'], 'Boolean');
      }
      if (data.hasOwnProperty('sessionOutRelay')) {
        obj['sessionOutRelay'] = ApiClient.convertToType(data['sessionOutRelay'], 'Boolean');
      }
      if (data.hasOwnProperty('audioRtpRelay')) {
        obj['audioRtpRelay'] = ApiClient.convertToType(data['audioRtpRelay'], 'Boolean');
      }
      if (data.hasOwnProperty('callRate')) {
        obj['callRate'] = ApiClient.convertToType(data['callRate'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_Percent_AI')) {
        obj['cumulLoss_Percent_AI'] = ApiClient.convertToType(data['cumulLoss_Percent_AI'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_Percent_AO')) {
        obj['cumulLoss_Percent_AO'] = ApiClient.convertToType(data['cumulLoss_Percent_AO'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_Percent_VI')) {
        obj['cumulLoss_Percent_VI'] = ApiClient.convertToType(data['cumulLoss_Percent_VI'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_Percent_VO')) {
        obj['cumulLoss_Percent_VO'] = ApiClient.convertToType(data['cumulLoss_Percent_VO'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_Percent_VIC')) {
        obj['cumulLoss_Percent_VIC'] = ApiClient.convertToType(data['cumulLoss_Percent_VIC'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_Percent_VOC')) {
        obj['cumulLoss_Percent_VOC'] = ApiClient.convertToType(data['cumulLoss_Percent_VOC'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_AI')) {
        obj['cumulLoss_AI'] = ApiClient.convertToType(data['cumulLoss_AI'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_AO')) {
        obj['cumulLoss_AO'] = ApiClient.convertToType(data['cumulLoss_AO'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_VI')) {
        obj['cumulLoss_VI'] = ApiClient.convertToType(data['cumulLoss_VI'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_VO')) {
        obj['cumulLoss_VO'] = ApiClient.convertToType(data['cumulLoss_VO'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_VIC')) {
        obj['cumulLoss_VIC'] = ApiClient.convertToType(data['cumulLoss_VIC'], 'Number');
      }
      if (data.hasOwnProperty('cumulLoss_VOC')) {
        obj['cumulLoss_VOC'] = ApiClient.convertToType(data['cumulLoss_VOC'], 'Number');
      }
      if (data.hasOwnProperty('discontinuityCount')) {
        obj['discontinuityCount'] = ApiClient.convertToType(data['discontinuityCount'], 'Number');
      }
      if (data.hasOwnProperty('droppedPackets_AI')) {
        obj['droppedPackets_AI'] = ApiClient.convertToType(data['droppedPackets_AI'], 'Number');
      }
      if (data.hasOwnProperty('droppedPackets_VI')) {
        obj['droppedPackets_VI'] = ApiClient.convertToType(data['droppedPackets_VI'], 'Number');
      }
      if (data.hasOwnProperty('droppedPackets_VIC')) {
        obj['droppedPackets_VIC'] = ApiClient.convertToType(data['droppedPackets_VIC'], 'Number');
      }
      if (data.hasOwnProperty('mixUnderRuns_AI')) {
        obj['mixUnderRuns_AI'] = ApiClient.convertToType(data['mixUnderRuns_AI'], 'Number');
      }
      if (data.hasOwnProperty('networkAvgLoss_AI')) {
        obj['networkAvgLoss_AI'] = ApiClient.convertToType(data['networkAvgLoss_AI'], 'Number');
      }
      if (data.hasOwnProperty('networkAvgLoss_AO')) {
        obj['networkAvgLoss_AO'] = ApiClient.convertToType(data['networkAvgLoss_AO'], 'Number');
      }
      if (data.hasOwnProperty('networkAvgLoss_VI')) {
        obj['networkAvgLoss_VI'] = ApiClient.convertToType(data['networkAvgLoss_VI'], 'Number');
      }
      if (data.hasOwnProperty('networkAvgLoss_VO')) {
        obj['networkAvgLoss_VO'] = ApiClient.convertToType(data['networkAvgLoss_VO'], 'Number');
      }
      if (data.hasOwnProperty('networkCumulLoss_AI')) {
        obj['networkCumulLoss_AI'] = ApiClient.convertToType(data['networkCumulLoss_AI'], 'Number');
      }
      if (data.hasOwnProperty('networkCumulLoss_AO')) {
        obj['networkCumulLoss_AO'] = ApiClient.convertToType(data['networkCumulLoss_AO'], 'Number');
      }
      if (data.hasOwnProperty('networkCumulLoss_VI')) {
        obj['networkCumulLoss_VI'] = ApiClient.convertToType(data['networkCumulLoss_VI'], 'Number');
      }
      if (data.hasOwnProperty('networkCumulLoss_VO')) {
        obj['networkCumulLoss_VO'] = ApiClient.convertToType(data['networkCumulLoss_VO'], 'Number');
      }
      if (data.hasOwnProperty('networkLoss_AI')) {
        obj['networkLoss_AI'] = ApiClient.convertToType(data['networkLoss_AI'], 'Number');
      }
      if (data.hasOwnProperty('networkLoss_AO')) {
        obj['networkLoss_AO'] = ApiClient.convertToType(data['networkLoss_AO'], 'Number');
      }
      if (data.hasOwnProperty('networkLoss_VI')) {
        obj['networkLoss_VI'] = ApiClient.convertToType(data['networkLoss_VI'], 'Number');
      }
      if (data.hasOwnProperty('networkLoss_VO')) {
        obj['networkLoss_VO'] = ApiClient.convertToType(data['networkLoss_VO'], 'Number');
      }
      if (data.hasOwnProperty('callQuality_Min')) {
        obj['callQuality_Min'] = ApiClient.convertToType(data['callQuality_Min'], 'Number');
      }
      if (data.hasOwnProperty('callQuality_Max')) {
        obj['callQuality_Max'] = ApiClient.convertToType(data['callQuality_Max'], 'Number');
      }
      if (data.hasOwnProperty('callQuality_Avg')) {
        obj['callQuality_Avg'] = ApiClient.convertToType(data['callQuality_Avg'], 'Number');
      }
      if (data.hasOwnProperty('fps_Min_VI')) {
        obj['fps_Min_VI'] = ApiClient.convertToType(data['fps_Min_VI'], 'Number');
      }
      if (data.hasOwnProperty('fps_Min_VO')) {
        obj['fps_Min_VO'] = ApiClient.convertToType(data['fps_Min_VO'], 'Number');
      }
      if (data.hasOwnProperty('fps_Min_VIC')) {
        obj['fps_Min_VIC'] = ApiClient.convertToType(data['fps_Min_VIC'], 'Number');
      }
      if (data.hasOwnProperty('fps_Min_VOC')) {
        obj['fps_Min_VOC'] = ApiClient.convertToType(data['fps_Min_VOC'], 'Number');
      }
      if (data.hasOwnProperty('fps_Max_VI')) {
        obj['fps_Max_VI'] = ApiClient.convertToType(data['fps_Max_VI'], 'Number');
      }
      if (data.hasOwnProperty('fps_Max_VO')) {
        obj['fps_Max_VO'] = ApiClient.convertToType(data['fps_Max_VO'], 'Number');
      }
      if (data.hasOwnProperty('fps_Max_VIC')) {
        obj['fps_Max_VIC'] = ApiClient.convertToType(data['fps_Max_VIC'], 'Number');
      }
      if (data.hasOwnProperty('fps_Max_VOC')) {
        obj['fps_Max_VOC'] = ApiClient.convertToType(data['fps_Max_VOC'], 'Number');
      }
      if (data.hasOwnProperty('fps_Avg_VI')) {
        obj['fps_Avg_VI'] = ApiClient.convertToType(data['fps_Avg_VI'], 'Number');
      }
      if (data.hasOwnProperty('fps_Avg_VO')) {
        obj['fps_Avg_VO'] = ApiClient.convertToType(data['fps_Avg_VO'], 'Number');
      }
      if (data.hasOwnProperty('fps_Avg_VIC')) {
        obj['fps_Avg_VIC'] = ApiClient.convertToType(data['fps_Avg_VIC'], 'Number');
      }
      if (data.hasOwnProperty('fps_Avg_VOC')) {
        obj['fps_Avg_VOC'] = ApiClient.convertToType(data['fps_Avg_VOC'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Min_AI')) {
        obj['bitrate_Min_AI'] = ApiClient.convertToType(data['bitrate_Min_AI'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Min_AO')) {
        obj['bitrate_Min_AO'] = ApiClient.convertToType(data['bitrate_Min_AO'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Min_VI')) {
        obj['bitrate_Min_VI'] = ApiClient.convertToType(data['bitrate_Min_VI'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Min_VO')) {
        obj['bitrate_Min_VO'] = ApiClient.convertToType(data['bitrate_Min_VO'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Min_VIC')) {
        obj['bitrate_Min_VIC'] = ApiClient.convertToType(data['bitrate_Min_VIC'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Min_VOC')) {
        obj['bitrate_Min_VOC'] = ApiClient.convertToType(data['bitrate_Min_VOC'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Max_AI')) {
        obj['bitrate_Max_AI'] = ApiClient.convertToType(data['bitrate_Max_AI'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Max_AO')) {
        obj['bitrate_Max_AO'] = ApiClient.convertToType(data['bitrate_Max_AO'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Max_VI')) {
        obj['bitrate_Max_VI'] = ApiClient.convertToType(data['bitrate_Max_VI'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Max_VO')) {
        obj['bitrate_Max_VO'] = ApiClient.convertToType(data['bitrate_Max_VO'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Max_VIC')) {
        obj['bitrate_Max_VIC'] = ApiClient.convertToType(data['bitrate_Max_VIC'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Max_VOC')) {
        obj['bitrate_Max_VOC'] = ApiClient.convertToType(data['bitrate_Max_VOC'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Avg_AI')) {
        obj['bitrate_Avg_AI'] = ApiClient.convertToType(data['bitrate_Avg_AI'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Avg_AO')) {
        obj['bitrate_Avg_AO'] = ApiClient.convertToType(data['bitrate_Avg_AO'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Avg_VI')) {
        obj['bitrate_Avg_VI'] = ApiClient.convertToType(data['bitrate_Avg_VI'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Avg_VO')) {
        obj['bitrate_Avg_VO'] = ApiClient.convertToType(data['bitrate_Avg_VO'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Avg_VIC')) {
        obj['bitrate_Avg_VIC'] = ApiClient.convertToType(data['bitrate_Avg_VIC'], 'Number');
      }
      if (data.hasOwnProperty('bitrate_Avg_VOC')) {
        obj['bitrate_Avg_VOC'] = ApiClient.convertToType(data['bitrate_Avg_VOC'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Min_AI')) {
        obj['jitter_Min_AI'] = ApiClient.convertToType(data['jitter_Min_AI'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Min_AO')) {
        obj['jitter_Min_AO'] = ApiClient.convertToType(data['jitter_Min_AO'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Min_VI')) {
        obj['jitter_Min_VI'] = ApiClient.convertToType(data['jitter_Min_VI'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Min_VO')) {
        obj['jitter_Min_VO'] = ApiClient.convertToType(data['jitter_Min_VO'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Min_VIC')) {
        obj['jitter_Min_VIC'] = ApiClient.convertToType(data['jitter_Min_VIC'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Min_VOC')) {
        obj['jitter_Min_VOC'] = ApiClient.convertToType(data['jitter_Min_VOC'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Max_AI')) {
        obj['jitter_Max_AI'] = ApiClient.convertToType(data['jitter_Max_AI'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Max_AO')) {
        obj['jitter_Max_AO'] = ApiClient.convertToType(data['jitter_Max_AO'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Max_VI')) {
        obj['jitter_Max_VI'] = ApiClient.convertToType(data['jitter_Max_VI'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Max_VO')) {
        obj['jitter_Max_VO'] = ApiClient.convertToType(data['jitter_Max_VO'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Max_VIC')) {
        obj['jitter_Max_VIC'] = ApiClient.convertToType(data['jitter_Max_VIC'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Max_VOC')) {
        obj['jitter_Max_VOC'] = ApiClient.convertToType(data['jitter_Max_VOC'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Avg_AI')) {
        obj['jitter_Avg_AI'] = ApiClient.convertToType(data['jitter_Avg_AI'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Avg_AO')) {
        obj['jitter_Avg_AO'] = ApiClient.convertToType(data['jitter_Avg_AO'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Avg_VI')) {
        obj['jitter_Avg_VI'] = ApiClient.convertToType(data['jitter_Avg_VI'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Avg_VO')) {
        obj['jitter_Avg_VO'] = ApiClient.convertToType(data['jitter_Avg_VO'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Avg_VIC')) {
        obj['jitter_Avg_VIC'] = ApiClient.convertToType(data['jitter_Avg_VIC'], 'Number');
      }
      if (data.hasOwnProperty('jitter_Avg_VOC')) {
        obj['jitter_Avg_VOC'] = ApiClient.convertToType(data['jitter_Avg_VOC'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Min_AI')) {
        obj['maxJitter_Min_AI'] = ApiClient.convertToType(data['maxJitter_Min_AI'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Min_VI')) {
        obj['maxJitter_Min_VI'] = ApiClient.convertToType(data['maxJitter_Min_VI'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Min_VIC')) {
        obj['maxJitter_Min_VIC'] = ApiClient.convertToType(data['maxJitter_Min_VIC'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Max_AI')) {
        obj['maxJitter_Max_AI'] = ApiClient.convertToType(data['maxJitter_Max_AI'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Max_VI')) {
        obj['maxJitter_Max_VI'] = ApiClient.convertToType(data['maxJitter_Max_VI'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Max_VIC')) {
        obj['maxJitter_Max_VIC'] = ApiClient.convertToType(data['maxJitter_Max_VIC'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Avg_AI')) {
        obj['maxJitter_Avg_AI'] = ApiClient.convertToType(data['maxJitter_Avg_AI'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Avg_VI')) {
        obj['maxJitter_Avg_VI'] = ApiClient.convertToType(data['maxJitter_Avg_VI'], 'Number');
      }
      if (data.hasOwnProperty('maxJitter_Avg_VIC')) {
        obj['maxJitter_Avg_VIC'] = ApiClient.convertToType(data['maxJitter_Avg_VIC'], 'Number');
      }
      if (data.hasOwnProperty('videoRecvHeight_Min')) {
        obj['videoRecvHeight_Min'] = ApiClient.convertToType(data['videoRecvHeight_Min'], 'Number');
      }
      if (data.hasOwnProperty('videoRecvHeight_Max')) {
        obj['videoRecvHeight_Max'] = ApiClient.convertToType(data['videoRecvHeight_Max'], 'Number');
      }
      if (data.hasOwnProperty('videoRecvWidth_Min')) {
        obj['videoRecvWidth_Min'] = ApiClient.convertToType(data['videoRecvWidth_Min'], 'Number');
      }
      if (data.hasOwnProperty('videoRecvWidth_Max')) {
        obj['videoRecvWidth_Max'] = ApiClient.convertToType(data['videoRecvWidth_Max'], 'Number');
      }
      if (data.hasOwnProperty('videoSendHeight_Min')) {
        obj['videoSendHeight_Min'] = ApiClient.convertToType(data['videoSendHeight_Min'], 'Number');
      }
      if (data.hasOwnProperty('videoSendHeight_Max')) {
        obj['videoSendHeight_Max'] = ApiClient.convertToType(data['videoSendHeight_Max'], 'Number');
      }
      if (data.hasOwnProperty('videoSendWidth_Min')) {
        obj['videoSendWidth_Min'] = ApiClient.convertToType(data['videoSendWidth_Min'], 'Number');
      }
      if (data.hasOwnProperty('videoSendWidth_Max')) {
        obj['videoSendWidth_Max'] = ApiClient.convertToType(data['videoSendWidth_Max'], 'Number');
      }
      if (data.hasOwnProperty('contentRecvHeight_Min')) {
        obj['contentRecvHeight_Min'] = ApiClient.convertToType(data['contentRecvHeight_Min'], 'Number');
      }
      if (data.hasOwnProperty('contentRecvHeight_Max')) {
        obj['contentRecvHeight_Max'] = ApiClient.convertToType(data['contentRecvHeight_Max'], 'Number');
      }
      if (data.hasOwnProperty('contentRecvWidth_Min')) {
        obj['contentRecvWidth_Min'] = ApiClient.convertToType(data['contentRecvWidth_Min'], 'Number');
      }
      if (data.hasOwnProperty('contentRecvWidth_Max')) {
        obj['contentRecvWidth_Max'] = ApiClient.convertToType(data['contentRecvWidth_Max'], 'Number');
      }
      if (data.hasOwnProperty('contentSendHeight_Min')) {
        obj['contentSendHeight_Min'] = ApiClient.convertToType(data['contentSendHeight_Min'], 'Number');
      }
      if (data.hasOwnProperty('contentSendHeight_Max')) {
        obj['contentSendHeight_Max'] = ApiClient.convertToType(data['contentSendHeight_Max'], 'Number');
      }
      if (data.hasOwnProperty('contentSendWidth_Min')) {
        obj['contentSendWidth_Min'] = ApiClient.convertToType(data['contentSendWidth_Min'], 'Number');
      }
      if (data.hasOwnProperty('contentSendWidth_Max')) {
        obj['contentSendWidth_Max'] = ApiClient.convertToType(data['contentSendWidth_Max'], 'Number');
      }
      if (data.hasOwnProperty('roundTripDelay_Min')) {
        obj['roundTripDelay_Min'] = ApiClient.convertToType(data['roundTripDelay_Min'], 'Number');
      }
      if (data.hasOwnProperty('roundTripDelay_Max')) {
        obj['roundTripDelay_Max'] = ApiClient.convertToType(data['roundTripDelay_Max'], 'Number');
      }
      if (data.hasOwnProperty('roundTripDelay_Avg')) {
        obj['roundTripDelay_Avg'] = ApiClient.convertToType(data['roundTripDelay_Avg'], 'Number');
      }
      if (data.hasOwnProperty('rfactor_Min')) {
        obj['rfactor_Min'] = ApiClient.convertToType(data['rfactor_Min'], 'Number');
      }
      if (data.hasOwnProperty('rfactor_Max')) {
        obj['rfactor_Max'] = ApiClient.convertToType(data['rfactor_Max'], 'Number');
      }
      if (data.hasOwnProperty('rfactor_Avg')) {
        obj['rfactor_Avg'] = ApiClient.convertToType(data['rfactor_Avg'], 'Number');
      }
      if (data.hasOwnProperty('processCpuLoad_Min')) {
        obj['processCpuLoad_Min'] = ApiClient.convertToType(data['processCpuLoad_Min'], 'Number');
      }
      if (data.hasOwnProperty('processCpuLoad_Max')) {
        obj['processCpuLoad_Max'] = ApiClient.convertToType(data['processCpuLoad_Max'], 'Number');
      }
      if (data.hasOwnProperty('processCpuLoad_Avg')) {
        obj['processCpuLoad_Avg'] = ApiClient.convertToType(data['processCpuLoad_Avg'], 'Number');
      }
      if (data.hasOwnProperty('systemCpuLoad_Min')) {
        obj['systemCpuLoad_Min'] = ApiClient.convertToType(data['systemCpuLoad_Min'], 'Number');
      }
      if (data.hasOwnProperty('systemCpuLoad_Max')) {
        obj['systemCpuLoad_Max'] = ApiClient.convertToType(data['systemCpuLoad_Max'], 'Number');
      }
      if (data.hasOwnProperty('systemCpuLoad_Avg')) {
        obj['systemCpuLoad_Avg'] = ApiClient.convertToType(data['systemCpuLoad_Avg'], 'Number');
      }
      if (data.hasOwnProperty('wifiRecvStrength_Min')) {
        obj['wifiRecvStrength_Min'] = ApiClient.convertToType(data['wifiRecvStrength_Min'], 'Number');
      }
      if (data.hasOwnProperty('wifiRecvStrength_Max')) {
        obj['wifiRecvStrength_Max'] = ApiClient.convertToType(data['wifiRecvStrength_Max'], 'Number');
      }
      if (data.hasOwnProperty('wifiRecvStrength_Avg')) {
        obj['wifiRecvStrength_Avg'] = ApiClient.convertToType(data['wifiRecvStrength_Avg'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Avg_VI')) {
        obj['keyFrameRate_Avg_VI'] = ApiClient.convertToType(data['keyFrameRate_Avg_VI'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Avg_VO')) {
        obj['keyFrameRate_Avg_VO'] = ApiClient.convertToType(data['keyFrameRate_Avg_VO'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Avg_VIC')) {
        obj['keyFrameRate_Avg_VIC'] = ApiClient.convertToType(data['keyFrameRate_Avg_VIC'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Avg_VOC')) {
        obj['keyFrameRate_Avg_VOC'] = ApiClient.convertToType(data['keyFrameRate_Avg_VOC'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Min_VI')) {
        obj['keyFrameRate_Min_VI'] = ApiClient.convertToType(data['keyFrameRate_Min_VI'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Min_VO')) {
        obj['keyFrameRate_Min_VO'] = ApiClient.convertToType(data['keyFrameRate_Min_VO'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Min_VIC')) {
        obj['keyFrameRate_Min_VIC'] = ApiClient.convertToType(data['keyFrameRate_Min_VIC'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Min_VOC')) {
        obj['keyFrameRate_Min_VOC'] = ApiClient.convertToType(data['keyFrameRate_Min_VOC'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Max_VI')) {
        obj['keyFrameRate_Max_VI'] = ApiClient.convertToType(data['keyFrameRate_Max_VI'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Max_VO')) {
        obj['keyFrameRate_Max_VO'] = ApiClient.convertToType(data['keyFrameRate_Max_VO'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Max_VIC')) {
        obj['keyFrameRate_Max_VIC'] = ApiClient.convertToType(data['keyFrameRate_Max_VIC'], 'Number');
      }
      if (data.hasOwnProperty('keyFrameRate_Max_VOC')) {
        obj['keyFrameRate_Max_VOC'] = ApiClient.convertToType(data['keyFrameRate_Max_VOC'], 'Number');
      }
      if (data.hasOwnProperty('roundTripDelay_Avg_VO')) {
        obj['roundTripDelay_Avg_VO'] = ApiClient.convertToType(data['roundTripDelay_Avg_VO'], 'Number');
      }
      if (data.hasOwnProperty('roundTripDelay_Avg_VOC')) {
        obj['roundTripDelay_Avg_VOC'] = ApiClient.convertToType(data['roundTripDelay_Avg_VOC'], 'Number');
      }
      if (data.hasOwnProperty('roundTripDelay_Avg_AO')) {
        obj['roundTripDelay_Avg_AO'] = ApiClient.convertToType(data['roundTripDelay_Avg_AO'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} audioRecvCodec
   */
  exports.prototype['audioRecvCodec'] = undefined;
  /**
   * @member {String} audioSendCodec
   */
  exports.prototype['audioSendCodec'] = undefined;
  /**
   * @member {Boolean} contentRecv
   */
  exports.prototype['contentRecv'] = undefined;
  /**
   * @member {Boolean} contentSend
   */
  exports.prototype['contentSend'] = undefined;
  /**
   * @member {Boolean} talkDetected
   */
  exports.prototype['talkDetected'] = undefined;
  /**
   * @member {Boolean} sessionRelay
   */
  exports.prototype['sessionRelay'] = undefined;
  /**
   * @member {Boolean} sessionInRelay
   */
  exports.prototype['sessionInRelay'] = undefined;
  /**
   * @member {Boolean} sessionOutRelay
   */
  exports.prototype['sessionOutRelay'] = undefined;
  /**
   * @member {Boolean} audioRtpRelay
   */
  exports.prototype['audioRtpRelay'] = undefined;
  /**
   * @member {Number} callRate
   */
  exports.prototype['callRate'] = undefined;
  /**
   * @member {Number} cumulLoss_Percent_AI
   */
  exports.prototype['cumulLoss_Percent_AI'] = undefined;
  /**
   * @member {Number} cumulLoss_Percent_AO
   */
  exports.prototype['cumulLoss_Percent_AO'] = undefined;
  /**
   * @member {Number} cumulLoss_Percent_VI
   */
  exports.prototype['cumulLoss_Percent_VI'] = undefined;
  /**
   * @member {Number} cumulLoss_Percent_VO
   */
  exports.prototype['cumulLoss_Percent_VO'] = undefined;
  /**
   * @member {Number} cumulLoss_Percent_VIC
   */
  exports.prototype['cumulLoss_Percent_VIC'] = undefined;
  /**
   * @member {Number} cumulLoss_Percent_VOC
   */
  exports.prototype['cumulLoss_Percent_VOC'] = undefined;
  /**
   * @member {Number} cumulLoss_AI
   */
  exports.prototype['cumulLoss_AI'] = undefined;
  /**
   * @member {Number} cumulLoss_AO
   */
  exports.prototype['cumulLoss_AO'] = undefined;
  /**
   * @member {Number} cumulLoss_VI
   */
  exports.prototype['cumulLoss_VI'] = undefined;
  /**
   * @member {Number} cumulLoss_VO
   */
  exports.prototype['cumulLoss_VO'] = undefined;
  /**
   * @member {Number} cumulLoss_VIC
   */
  exports.prototype['cumulLoss_VIC'] = undefined;
  /**
   * @member {Number} cumulLoss_VOC
   */
  exports.prototype['cumulLoss_VOC'] = undefined;
  /**
   * @member {Number} discontinuityCount
   */
  exports.prototype['discontinuityCount'] = undefined;
  /**
   * @member {Number} droppedPackets_AI
   */
  exports.prototype['droppedPackets_AI'] = undefined;
  /**
   * @member {Number} droppedPackets_VI
   */
  exports.prototype['droppedPackets_VI'] = undefined;
  /**
   * @member {Number} droppedPackets_VIC
   */
  exports.prototype['droppedPackets_VIC'] = undefined;
  /**
   * @member {Number} mixUnderRuns_AI
   */
  exports.prototype['mixUnderRuns_AI'] = undefined;
  /**
   * @member {Number} networkAvgLoss_AI
   */
  exports.prototype['networkAvgLoss_AI'] = undefined;
  /**
   * @member {Number} networkAvgLoss_AO
   */
  exports.prototype['networkAvgLoss_AO'] = undefined;
  /**
   * @member {Number} networkAvgLoss_VI
   */
  exports.prototype['networkAvgLoss_VI'] = undefined;
  /**
   * @member {Number} networkAvgLoss_VO
   */
  exports.prototype['networkAvgLoss_VO'] = undefined;
  /**
   * @member {Number} networkCumulLoss_AI
   */
  exports.prototype['networkCumulLoss_AI'] = undefined;
  /**
   * @member {Number} networkCumulLoss_AO
   */
  exports.prototype['networkCumulLoss_AO'] = undefined;
  /**
   * @member {Number} networkCumulLoss_VI
   */
  exports.prototype['networkCumulLoss_VI'] = undefined;
  /**
   * @member {Number} networkCumulLoss_VO
   */
  exports.prototype['networkCumulLoss_VO'] = undefined;
  /**
   * @member {Number} networkLoss_AI
   */
  exports.prototype['networkLoss_AI'] = undefined;
  /**
   * @member {Number} networkLoss_AO
   */
  exports.prototype['networkLoss_AO'] = undefined;
  /**
   * @member {Number} networkLoss_VI
   */
  exports.prototype['networkLoss_VI'] = undefined;
  /**
   * @member {Number} networkLoss_VO
   */
  exports.prototype['networkLoss_VO'] = undefined;
  /**
   * @member {Number} callQuality_Min
   */
  exports.prototype['callQuality_Min'] = undefined;
  /**
   * @member {Number} callQuality_Max
   */
  exports.prototype['callQuality_Max'] = undefined;
  /**
   * @member {Number} callQuality_Avg
   */
  exports.prototype['callQuality_Avg'] = undefined;
  /**
   * @member {Number} fps_Min_VI
   */
  exports.prototype['fps_Min_VI'] = undefined;
  /**
   * @member {Number} fps_Min_VO
   */
  exports.prototype['fps_Min_VO'] = undefined;
  /**
   * @member {Number} fps_Min_VIC
   */
  exports.prototype['fps_Min_VIC'] = undefined;
  /**
   * @member {Number} fps_Min_VOC
   */
  exports.prototype['fps_Min_VOC'] = undefined;
  /**
   * @member {Number} fps_Max_VI
   */
  exports.prototype['fps_Max_VI'] = undefined;
  /**
   * @member {Number} fps_Max_VO
   */
  exports.prototype['fps_Max_VO'] = undefined;
  /**
   * @member {Number} fps_Max_VIC
   */
  exports.prototype['fps_Max_VIC'] = undefined;
  /**
   * @member {Number} fps_Max_VOC
   */
  exports.prototype['fps_Max_VOC'] = undefined;
  /**
   * @member {Number} fps_Avg_VI
   */
  exports.prototype['fps_Avg_VI'] = undefined;
  /**
   * @member {Number} fps_Avg_VO
   */
  exports.prototype['fps_Avg_VO'] = undefined;
  /**
   * @member {Number} fps_Avg_VIC
   */
  exports.prototype['fps_Avg_VIC'] = undefined;
  /**
   * @member {Number} fps_Avg_VOC
   */
  exports.prototype['fps_Avg_VOC'] = undefined;
  /**
   * @member {Number} bitrate_Min_AI
   */
  exports.prototype['bitrate_Min_AI'] = undefined;
  /**
   * @member {Number} bitrate_Min_AO
   */
  exports.prototype['bitrate_Min_AO'] = undefined;
  /**
   * @member {Number} bitrate_Min_VI
   */
  exports.prototype['bitrate_Min_VI'] = undefined;
  /**
   * @member {Number} bitrate_Min_VO
   */
  exports.prototype['bitrate_Min_VO'] = undefined;
  /**
   * @member {Number} bitrate_Min_VIC
   */
  exports.prototype['bitrate_Min_VIC'] = undefined;
  /**
   * @member {Number} bitrate_Min_VOC
   */
  exports.prototype['bitrate_Min_VOC'] = undefined;
  /**
   * @member {Number} bitrate_Max_AI
   */
  exports.prototype['bitrate_Max_AI'] = undefined;
  /**
   * @member {Number} bitrate_Max_AO
   */
  exports.prototype['bitrate_Max_AO'] = undefined;
  /**
   * @member {Number} bitrate_Max_VI
   */
  exports.prototype['bitrate_Max_VI'] = undefined;
  /**
   * @member {Number} bitrate_Max_VO
   */
  exports.prototype['bitrate_Max_VO'] = undefined;
  /**
   * @member {Number} bitrate_Max_VIC
   */
  exports.prototype['bitrate_Max_VIC'] = undefined;
  /**
   * @member {Number} bitrate_Max_VOC
   */
  exports.prototype['bitrate_Max_VOC'] = undefined;
  /**
   * @member {Number} bitrate_Avg_AI
   */
  exports.prototype['bitrate_Avg_AI'] = undefined;
  /**
   * @member {Number} bitrate_Avg_AO
   */
  exports.prototype['bitrate_Avg_AO'] = undefined;
  /**
   * @member {Number} bitrate_Avg_VI
   */
  exports.prototype['bitrate_Avg_VI'] = undefined;
  /**
   * @member {Number} bitrate_Avg_VO
   */
  exports.prototype['bitrate_Avg_VO'] = undefined;
  /**
   * @member {Number} bitrate_Avg_VIC
   */
  exports.prototype['bitrate_Avg_VIC'] = undefined;
  /**
   * @member {Number} bitrate_Avg_VOC
   */
  exports.prototype['bitrate_Avg_VOC'] = undefined;
  /**
   * @member {Number} jitter_Min_AI
   */
  exports.prototype['jitter_Min_AI'] = undefined;
  /**
   * @member {Number} jitter_Min_AO
   */
  exports.prototype['jitter_Min_AO'] = undefined;
  /**
   * @member {Number} jitter_Min_VI
   */
  exports.prototype['jitter_Min_VI'] = undefined;
  /**
   * @member {Number} jitter_Min_VO
   */
  exports.prototype['jitter_Min_VO'] = undefined;
  /**
   * @member {Number} jitter_Min_VIC
   */
  exports.prototype['jitter_Min_VIC'] = undefined;
  /**
   * @member {Number} jitter_Min_VOC
   */
  exports.prototype['jitter_Min_VOC'] = undefined;
  /**
   * @member {Number} jitter_Max_AI
   */
  exports.prototype['jitter_Max_AI'] = undefined;
  /**
   * @member {Number} jitter_Max_AO
   */
  exports.prototype['jitter_Max_AO'] = undefined;
  /**
   * @member {Number} jitter_Max_VI
   */
  exports.prototype['jitter_Max_VI'] = undefined;
  /**
   * @member {Number} jitter_Max_VO
   */
  exports.prototype['jitter_Max_VO'] = undefined;
  /**
   * @member {Number} jitter_Max_VIC
   */
  exports.prototype['jitter_Max_VIC'] = undefined;
  /**
   * @member {Number} jitter_Max_VOC
   */
  exports.prototype['jitter_Max_VOC'] = undefined;
  /**
   * @member {Number} jitter_Avg_AI
   */
  exports.prototype['jitter_Avg_AI'] = undefined;
  /**
   * @member {Number} jitter_Avg_AO
   */
  exports.prototype['jitter_Avg_AO'] = undefined;
  /**
   * @member {Number} jitter_Avg_VI
   */
  exports.prototype['jitter_Avg_VI'] = undefined;
  /**
   * @member {Number} jitter_Avg_VO
   */
  exports.prototype['jitter_Avg_VO'] = undefined;
  /**
   * @member {Number} jitter_Avg_VIC
   */
  exports.prototype['jitter_Avg_VIC'] = undefined;
  /**
   * @member {Number} jitter_Avg_VOC
   */
  exports.prototype['jitter_Avg_VOC'] = undefined;
  /**
   * @member {Number} maxJitter_Min_AI
   */
  exports.prototype['maxJitter_Min_AI'] = undefined;
  /**
   * @member {Number} maxJitter_Min_VI
   */
  exports.prototype['maxJitter_Min_VI'] = undefined;
  /**
   * @member {Number} maxJitter_Min_VIC
   */
  exports.prototype['maxJitter_Min_VIC'] = undefined;
  /**
   * @member {Number} maxJitter_Max_AI
   */
  exports.prototype['maxJitter_Max_AI'] = undefined;
  /**
   * @member {Number} maxJitter_Max_VI
   */
  exports.prototype['maxJitter_Max_VI'] = undefined;
  /**
   * @member {Number} maxJitter_Max_VIC
   */
  exports.prototype['maxJitter_Max_VIC'] = undefined;
  /**
   * @member {Number} maxJitter_Avg_AI
   */
  exports.prototype['maxJitter_Avg_AI'] = undefined;
  /**
   * @member {Number} maxJitter_Avg_VI
   */
  exports.prototype['maxJitter_Avg_VI'] = undefined;
  /**
   * @member {Number} maxJitter_Avg_VIC
   */
  exports.prototype['maxJitter_Avg_VIC'] = undefined;
  /**
   * @member {Number} videoRecvHeight_Min
   */
  exports.prototype['videoRecvHeight_Min'] = undefined;
  /**
   * @member {Number} videoRecvHeight_Max
   */
  exports.prototype['videoRecvHeight_Max'] = undefined;
  /**
   * @member {Number} videoRecvWidth_Min
   */
  exports.prototype['videoRecvWidth_Min'] = undefined;
  /**
   * @member {Number} videoRecvWidth_Max
   */
  exports.prototype['videoRecvWidth_Max'] = undefined;
  /**
   * @member {Number} videoSendHeight_Min
   */
  exports.prototype['videoSendHeight_Min'] = undefined;
  /**
   * @member {Number} videoSendHeight_Max
   */
  exports.prototype['videoSendHeight_Max'] = undefined;
  /**
   * @member {Number} videoSendWidth_Min
   */
  exports.prototype['videoSendWidth_Min'] = undefined;
  /**
   * @member {Number} videoSendWidth_Max
   */
  exports.prototype['videoSendWidth_Max'] = undefined;
  /**
   * @member {Number} contentRecvHeight_Min
   */
  exports.prototype['contentRecvHeight_Min'] = undefined;
  /**
   * @member {Number} contentRecvHeight_Max
   */
  exports.prototype['contentRecvHeight_Max'] = undefined;
  /**
   * @member {Number} contentRecvWidth_Min
   */
  exports.prototype['contentRecvWidth_Min'] = undefined;
  /**
   * @member {Number} contentRecvWidth_Max
   */
  exports.prototype['contentRecvWidth_Max'] = undefined;
  /**
   * @member {Number} contentSendHeight_Min
   */
  exports.prototype['contentSendHeight_Min'] = undefined;
  /**
   * @member {Number} contentSendHeight_Max
   */
  exports.prototype['contentSendHeight_Max'] = undefined;
  /**
   * @member {Number} contentSendWidth_Min
   */
  exports.prototype['contentSendWidth_Min'] = undefined;
  /**
   * @member {Number} contentSendWidth_Max
   */
  exports.prototype['contentSendWidth_Max'] = undefined;
  /**
   * @member {Number} roundTripDelay_Min
   */
  exports.prototype['roundTripDelay_Min'] = undefined;
  /**
   * @member {Number} roundTripDelay_Max
   */
  exports.prototype['roundTripDelay_Max'] = undefined;
  /**
   * @member {Number} roundTripDelay_Avg
   */
  exports.prototype['roundTripDelay_Avg'] = undefined;
  /**
   * @member {Number} rfactor_Min
   */
  exports.prototype['rfactor_Min'] = undefined;
  /**
   * @member {Number} rfactor_Max
   */
  exports.prototype['rfactor_Max'] = undefined;
  /**
   * @member {Number} rfactor_Avg
   */
  exports.prototype['rfactor_Avg'] = undefined;
  /**
   * @member {Number} processCpuLoad_Min
   */
  exports.prototype['processCpuLoad_Min'] = undefined;
  /**
   * @member {Number} processCpuLoad_Max
   */
  exports.prototype['processCpuLoad_Max'] = undefined;
  /**
   * @member {Number} processCpuLoad_Avg
   */
  exports.prototype['processCpuLoad_Avg'] = undefined;
  /**
   * @member {Number} systemCpuLoad_Min
   */
  exports.prototype['systemCpuLoad_Min'] = undefined;
  /**
   * @member {Number} systemCpuLoad_Max
   */
  exports.prototype['systemCpuLoad_Max'] = undefined;
  /**
   * @member {Number} systemCpuLoad_Avg
   */
  exports.prototype['systemCpuLoad_Avg'] = undefined;
  /**
   * @member {Number} wifiRecvStrength_Min
   */
  exports.prototype['wifiRecvStrength_Min'] = undefined;
  /**
   * @member {Number} wifiRecvStrength_Max
   */
  exports.prototype['wifiRecvStrength_Max'] = undefined;
  /**
   * @member {Number} wifiRecvStrength_Avg
   */
  exports.prototype['wifiRecvStrength_Avg'] = undefined;
  /**
   * @member {Number} keyFrameRate_Avg_VI
   */
  exports.prototype['keyFrameRate_Avg_VI'] = undefined;
  /**
   * @member {Number} keyFrameRate_Avg_VO
   */
  exports.prototype['keyFrameRate_Avg_VO'] = undefined;
  /**
   * @member {Number} keyFrameRate_Avg_VIC
   */
  exports.prototype['keyFrameRate_Avg_VIC'] = undefined;
  /**
   * @member {Number} keyFrameRate_Avg_VOC
   */
  exports.prototype['keyFrameRate_Avg_VOC'] = undefined;
  /**
   * @member {Number} keyFrameRate_Min_VI
   */
  exports.prototype['keyFrameRate_Min_VI'] = undefined;
  /**
   * @member {Number} keyFrameRate_Min_VO
   */
  exports.prototype['keyFrameRate_Min_VO'] = undefined;
  /**
   * @member {Number} keyFrameRate_Min_VIC
   */
  exports.prototype['keyFrameRate_Min_VIC'] = undefined;
  /**
   * @member {Number} keyFrameRate_Min_VOC
   */
  exports.prototype['keyFrameRate_Min_VOC'] = undefined;
  /**
   * @member {Number} keyFrameRate_Max_VI
   */
  exports.prototype['keyFrameRate_Max_VI'] = undefined;
  /**
   * @member {Number} keyFrameRate_Max_VO
   */
  exports.prototype['keyFrameRate_Max_VO'] = undefined;
  /**
   * @member {Number} keyFrameRate_Max_VIC
   */
  exports.prototype['keyFrameRate_Max_VIC'] = undefined;
  /**
   * @member {Number} keyFrameRate_Max_VOC
   */
  exports.prototype['keyFrameRate_Max_VOC'] = undefined;
  /**
   * @member {Number} roundTripDelay_Avg_VO
   */
  exports.prototype['roundTripDelay_Avg_VO'] = undefined;
  /**
   * @member {Number} roundTripDelay_Avg_VOC
   */
  exports.prototype['roundTripDelay_Avg_VOC'] = undefined;
  /**
   * @member {Number} roundTripDelay_Avg_AO
   */
  exports.prototype['roundTripDelay_Avg_AO'] = undefined;



  return exports;
}));


