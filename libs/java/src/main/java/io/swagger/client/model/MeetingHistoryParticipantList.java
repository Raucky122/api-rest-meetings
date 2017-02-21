/**
 * BlueJeans onVideo REST API
 * _Video That Works Where You Do, from the world's leader in cloud video communication._ # Authentication Each API request that is sent to BlueJeans requires an access token, which is obtained through the BlueJeans Authentication API. There are several methods (grant types) for obtaining an access token, which follow the OAuth2.0 specification. ## Grant Types * Authorization Code Grant – This grant type is used in an authentication flow commonly referred to as \"three-legged OAuth\". The user authenticates via a BlueJeans page, which provides an authorization code. This code, along with a few other elements, can be used to obtain an access code. * Password Credentials Grant – This grant type is used in a two-legged OAuth flow. Username and password are sent to retrieve an access code. * Client Credentials Grant – This grant type is used in a two-legged OAuth flow.  ## Access & Permissions The access level that is associated with each access token is referred to as the scope. There are three basic levels of access that BlueJeans allows, which affect the level of scope.  Three access levels exist within the Blue Jeans service today. * Meeting-level – Authentication takes place using a meeting ID and passcode, and the scope is limited to APIs that relate to the individual meeting. * User-level – Authentication either takes place via three-legged OAuth, or else a direct authorization token request containing a username or password. Access level depends on the requested scope permissions. * App-level – An application is provisioned either by BlueJeans personnel, or within the BlueJeans Enterprise Admin interface. When provisioning an app, a client key and secret are provided, which is then used to obtain an access token, via the BlueJeans Authentication API. The scope that is associated with the token will provide access to an entire enterprise and all of its users.  All endpoints in this document that require Enterprise Admin access will be marked as such. ## Testing In order to make effective use of this page, you will first use one of the authentication methods to obtain an access token. Once the token is given, use the Authenticate button up in the header to store the token. Each BlueJeans API called after that will use the access token provided. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;


/**
 * MeetingHistoryParticipantList
 */
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2017-02-21T16:04:47.098-07:00")
public class MeetingHistoryParticipantList   {
  @SerializedName("endpointName")
  private String endpointName = null;

  @SerializedName("joinTime")
  private Integer joinTime = null;

  @SerializedName("minutes")
  private Integer minutes = null;

  /**
   * Gets or Sets deviceType
   */
  public enum DeviceTypeEnum {
    @SerializedName("Carmel")
    CARMEL("Carmel"),
    
    @SerializedName("WebRTC")
    WEBRTC("WebRTC");

    private String value;

    DeviceTypeEnum(String value) {
      this.value = value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
  }

  @SerializedName("deviceType")
  private DeviceTypeEnum deviceType = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("remoteAddress")
  private String remoteAddress = null;

  @SerializedName("isEncrypted")
  private Boolean isEncrypted = null;

  @SerializedName("disconnectTime")
  private Integer disconnectTime = null;

  @SerializedName("isModerator")
  private Boolean isModerator = null;

  @SerializedName("userId")
  private Integer userId = null;

  @SerializedName("tags")
  private String tags = null;

  @SerializedName("participantGuid")
  private String participantGuid = null;

  public MeetingHistoryParticipantList endpointName(String endpointName) {
    this.endpointName = endpointName;
    return this;
  }

   /**
   * Get endpointName
   * @return endpointName
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getEndpointName() {
    return endpointName;
  }

  public void setEndpointName(String endpointName) {
    this.endpointName = endpointName;
  }

  public MeetingHistoryParticipantList joinTime(Integer joinTime) {
    this.joinTime = joinTime;
    return this;
  }

   /**
   * Get joinTime
   * @return joinTime
  **/
  @ApiModelProperty(example = "null", value = "")
  public Integer getJoinTime() {
    return joinTime;
  }

  public void setJoinTime(Integer joinTime) {
    this.joinTime = joinTime;
  }

  public MeetingHistoryParticipantList minutes(Integer minutes) {
    this.minutes = minutes;
    return this;
  }

   /**
   * Get minutes
   * @return minutes
  **/
  @ApiModelProperty(example = "null", value = "")
  public Integer getMinutes() {
    return minutes;
  }

  public void setMinutes(Integer minutes) {
    this.minutes = minutes;
  }

  public MeetingHistoryParticipantList deviceType(DeviceTypeEnum deviceType) {
    this.deviceType = deviceType;
    return this;
  }

   /**
   * Get deviceType
   * @return deviceType
  **/
  @ApiModelProperty(example = "null", value = "")
  public DeviceTypeEnum getDeviceType() {
    return deviceType;
  }

  public void setDeviceType(DeviceTypeEnum deviceType) {
    this.deviceType = deviceType;
  }

  public MeetingHistoryParticipantList email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public MeetingHistoryParticipantList remoteAddress(String remoteAddress) {
    this.remoteAddress = remoteAddress;
    return this;
  }

   /**
   * Get remoteAddress
   * @return remoteAddress
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getRemoteAddress() {
    return remoteAddress;
  }

  public void setRemoteAddress(String remoteAddress) {
    this.remoteAddress = remoteAddress;
  }

  public MeetingHistoryParticipantList isEncrypted(Boolean isEncrypted) {
    this.isEncrypted = isEncrypted;
    return this;
  }

   /**
   * Get isEncrypted
   * @return isEncrypted
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getIsEncrypted() {
    return isEncrypted;
  }

  public void setIsEncrypted(Boolean isEncrypted) {
    this.isEncrypted = isEncrypted;
  }

  public MeetingHistoryParticipantList disconnectTime(Integer disconnectTime) {
    this.disconnectTime = disconnectTime;
    return this;
  }

   /**
   * Get disconnectTime
   * @return disconnectTime
  **/
  @ApiModelProperty(example = "null", value = "")
  public Integer getDisconnectTime() {
    return disconnectTime;
  }

  public void setDisconnectTime(Integer disconnectTime) {
    this.disconnectTime = disconnectTime;
  }

  public MeetingHistoryParticipantList isModerator(Boolean isModerator) {
    this.isModerator = isModerator;
    return this;
  }

   /**
   * Get isModerator
   * @return isModerator
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getIsModerator() {
    return isModerator;
  }

  public void setIsModerator(Boolean isModerator) {
    this.isModerator = isModerator;
  }

  public MeetingHistoryParticipantList userId(Integer userId) {
    this.userId = userId;
    return this;
  }

   /**
   * Get userId
   * @return userId
  **/
  @ApiModelProperty(example = "null", value = "")
  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public MeetingHistoryParticipantList tags(String tags) {
    this.tags = tags;
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getTags() {
    return tags;
  }

  public void setTags(String tags) {
    this.tags = tags;
  }

  public MeetingHistoryParticipantList participantGuid(String participantGuid) {
    this.participantGuid = participantGuid;
    return this;
  }

   /**
   * Get participantGuid
   * @return participantGuid
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getParticipantGuid() {
    return participantGuid;
  }

  public void setParticipantGuid(String participantGuid) {
    this.participantGuid = participantGuid;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MeetingHistoryParticipantList meetingHistoryParticipantList = (MeetingHistoryParticipantList) o;
    return Objects.equals(this.endpointName, meetingHistoryParticipantList.endpointName) &&
        Objects.equals(this.joinTime, meetingHistoryParticipantList.joinTime) &&
        Objects.equals(this.minutes, meetingHistoryParticipantList.minutes) &&
        Objects.equals(this.deviceType, meetingHistoryParticipantList.deviceType) &&
        Objects.equals(this.email, meetingHistoryParticipantList.email) &&
        Objects.equals(this.remoteAddress, meetingHistoryParticipantList.remoteAddress) &&
        Objects.equals(this.isEncrypted, meetingHistoryParticipantList.isEncrypted) &&
        Objects.equals(this.disconnectTime, meetingHistoryParticipantList.disconnectTime) &&
        Objects.equals(this.isModerator, meetingHistoryParticipantList.isModerator) &&
        Objects.equals(this.userId, meetingHistoryParticipantList.userId) &&
        Objects.equals(this.tags, meetingHistoryParticipantList.tags) &&
        Objects.equals(this.participantGuid, meetingHistoryParticipantList.participantGuid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(endpointName, joinTime, minutes, deviceType, email, remoteAddress, isEncrypted, disconnectTime, isModerator, userId, tags, participantGuid);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MeetingHistoryParticipantList {\n");
    
    sb.append("    endpointName: ").append(toIndentedString(endpointName)).append("\n");
    sb.append("    joinTime: ").append(toIndentedString(joinTime)).append("\n");
    sb.append("    minutes: ").append(toIndentedString(minutes)).append("\n");
    sb.append("    deviceType: ").append(toIndentedString(deviceType)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    remoteAddress: ").append(toIndentedString(remoteAddress)).append("\n");
    sb.append("    isEncrypted: ").append(toIndentedString(isEncrypted)).append("\n");
    sb.append("    disconnectTime: ").append(toIndentedString(disconnectTime)).append("\n");
    sb.append("    isModerator: ").append(toIndentedString(isModerator)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    participantGuid: ").append(toIndentedString(participantGuid)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

