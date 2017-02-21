/* 
 * BlueJeans onVideo REST API
 *
 * _Video That Works Where You Do, from the world's leader in cloud video communication._ # Authentication Each API request that is sent to BlueJeans requires an access token, which is obtained through the BlueJeans Authentication API. There are several methods (grant types) for obtaining an access token, which follow the OAuth2.0 specification. ## Grant Types * Authorization Code Grant – This grant type is used in an authentication flow commonly referred to as \"three-legged OAuth\". The user authenticates via a BlueJeans page, which provides an authorization code. This code, along with a few other elements, can be used to obtain an access code. * Password Credentials Grant – This grant type is used in a two-legged OAuth flow. Username and password are sent to retrieve an access code. * Client Credentials Grant – This grant type is used in a two-legged OAuth flow.  ## Access & Permissions The access level that is associated with each access token is referred to as the scope. There are three basic levels of access that BlueJeans allows, which affect the level of scope.  Three access levels exist within the Blue Jeans service today. * Meeting-level – Authentication takes place using a meeting ID and passcode, and the scope is limited to APIs that relate to the individual meeting. * User-level – Authentication either takes place via three-legged OAuth, or else a direct authorization token request containing a username or password. Access level depends on the requested scope permissions. * App-level – An application is provisioned either by BlueJeans personnel, or within the BlueJeans Enterprise Admin interface. When provisioning an app, a client key and secret are provided, which is then used to obtain an access token, via the BlueJeans Authentication API. The scope that is associated with the token will provide access to an entire enterprise and all of its users.  All endpoints in this document that require Enterprise Admin access will be marked as such. ## Testing In order to make effective use of this page, you will first use one of the authentication methods to obtain an access token. Once the token is given, use the Authenticate button up in the header to store the token. Each BlueJeans API called after that will use the access token provided. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace IO.Swagger.Model
{
    /// <summary>
    /// MeetingAdvancedMeetingOptions
    /// </summary>
    [DataContract]
    public partial class MeetingAdvancedMeetingOptions :  IEquatable<MeetingAdvancedMeetingOptions>
    {
        /// <summary>
        /// Gets or Sets EncryptionType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum EncryptionTypeEnum
        {
            
            /// <summary>
            /// Enum NOENCRYPTION for "NO_ENCRYPTION"
            /// </summary>
            [EnumMember(Value = "NO_ENCRYPTION")]
            NOENCRYPTION,
            
            /// <summary>
            /// Enum ENCRYPTEDONLY for "ENCRYPTED_ONLY"
            /// </summary>
            [EnumMember(Value = "ENCRYPTED_ONLY")]
            ENCRYPTEDONLY,
            
            /// <summary>
            /// Enum ENCRYPTEDORPSTNONLY for "ENCRYPTED_OR_PSTN_ONLY"
            /// </summary>
            [EnumMember(Value = "ENCRYPTED_OR_PSTN_ONLY")]
            ENCRYPTEDORPSTNONLY
        }

        /// <summary>
        /// Gets or Sets EncryptionType
        /// </summary>
        [DataMember(Name="encryptionType", EmitDefaultValue=false)]
        public EncryptionTypeEnum? EncryptionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="MeetingAdvancedMeetingOptions" /> class.
        /// </summary>
        /// <param name="AutoRecord">AutoRecord.</param>
        /// <param name="MuteParticipantsOnEntry">MuteParticipantsOnEntry.</param>
        /// <param name="EncryptionType">EncryptionType (default to &quot;NO_ENCRYPTION&quot;).</param>
        /// <param name="ModeratorLess">ModeratorLess.</param>
        /// <param name="VideoBestFit">VideoBestFit.</param>
        /// <param name="DisallowChat">DisallowChat.</param>
        /// <param name="PublishMeeting">PublishMeeting.</param>
        /// <param name="ShowAllAttendeesInMeetingInvite">ShowAllAttendeesInMeetingInvite.</param>
        public MeetingAdvancedMeetingOptions(bool? AutoRecord = null, bool? MuteParticipantsOnEntry = null, EncryptionTypeEnum? EncryptionType = null, bool? ModeratorLess = null, bool? VideoBestFit = null, bool? DisallowChat = null, bool? PublishMeeting = null, bool? ShowAllAttendeesInMeetingInvite = null)
        {
            this.AutoRecord = AutoRecord;
            this.MuteParticipantsOnEntry = MuteParticipantsOnEntry;
            // use default value if no "EncryptionType" provided
            if (EncryptionType == null)
            {
                this.EncryptionType = "NO_ENCRYPTION";
            }
            else
            {
                this.EncryptionType = EncryptionType;
            }
            this.ModeratorLess = ModeratorLess;
            this.VideoBestFit = VideoBestFit;
            this.DisallowChat = DisallowChat;
            this.PublishMeeting = PublishMeeting;
            this.ShowAllAttendeesInMeetingInvite = ShowAllAttendeesInMeetingInvite;
        }
        
        /// <summary>
        /// Gets or Sets AutoRecord
        /// </summary>
        [DataMember(Name="autoRecord", EmitDefaultValue=false)]
        public bool? AutoRecord { get; set; }
        /// <summary>
        /// Gets or Sets MuteParticipantsOnEntry
        /// </summary>
        [DataMember(Name="muteParticipantsOnEntry", EmitDefaultValue=false)]
        public bool? MuteParticipantsOnEntry { get; set; }
        /// <summary>
        /// Gets or Sets ModeratorLess
        /// </summary>
        [DataMember(Name="moderatorLess", EmitDefaultValue=false)]
        public bool? ModeratorLess { get; set; }
        /// <summary>
        /// Gets or Sets VideoBestFit
        /// </summary>
        [DataMember(Name="videoBestFit", EmitDefaultValue=false)]
        public bool? VideoBestFit { get; set; }
        /// <summary>
        /// Gets or Sets DisallowChat
        /// </summary>
        [DataMember(Name="disallowChat", EmitDefaultValue=false)]
        public bool? DisallowChat { get; set; }
        /// <summary>
        /// Gets or Sets PublishMeeting
        /// </summary>
        [DataMember(Name="publishMeeting", EmitDefaultValue=false)]
        public bool? PublishMeeting { get; set; }
        /// <summary>
        /// Gets or Sets ShowAllAttendeesInMeetingInvite
        /// </summary>
        [DataMember(Name="showAllAttendeesInMeetingInvite", EmitDefaultValue=false)]
        public bool? ShowAllAttendeesInMeetingInvite { get; set; }
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MeetingAdvancedMeetingOptions {\n");
            sb.Append("  AutoRecord: ").Append(AutoRecord).Append("\n");
            sb.Append("  MuteParticipantsOnEntry: ").Append(MuteParticipantsOnEntry).Append("\n");
            sb.Append("  EncryptionType: ").Append(EncryptionType).Append("\n");
            sb.Append("  ModeratorLess: ").Append(ModeratorLess).Append("\n");
            sb.Append("  VideoBestFit: ").Append(VideoBestFit).Append("\n");
            sb.Append("  DisallowChat: ").Append(DisallowChat).Append("\n");
            sb.Append("  PublishMeeting: ").Append(PublishMeeting).Append("\n");
            sb.Append("  ShowAllAttendeesInMeetingInvite: ").Append(ShowAllAttendeesInMeetingInvite).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            return this.Equals(obj as MeetingAdvancedMeetingOptions);
        }

        /// <summary>
        /// Returns true if MeetingAdvancedMeetingOptions instances are equal
        /// </summary>
        /// <param name="other">Instance of MeetingAdvancedMeetingOptions to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MeetingAdvancedMeetingOptions other)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            if (other == null)
                return false;

            return 
                (
                    this.AutoRecord == other.AutoRecord ||
                    this.AutoRecord != null &&
                    this.AutoRecord.Equals(other.AutoRecord)
                ) && 
                (
                    this.MuteParticipantsOnEntry == other.MuteParticipantsOnEntry ||
                    this.MuteParticipantsOnEntry != null &&
                    this.MuteParticipantsOnEntry.Equals(other.MuteParticipantsOnEntry)
                ) && 
                (
                    this.EncryptionType == other.EncryptionType ||
                    this.EncryptionType != null &&
                    this.EncryptionType.Equals(other.EncryptionType)
                ) && 
                (
                    this.ModeratorLess == other.ModeratorLess ||
                    this.ModeratorLess != null &&
                    this.ModeratorLess.Equals(other.ModeratorLess)
                ) && 
                (
                    this.VideoBestFit == other.VideoBestFit ||
                    this.VideoBestFit != null &&
                    this.VideoBestFit.Equals(other.VideoBestFit)
                ) && 
                (
                    this.DisallowChat == other.DisallowChat ||
                    this.DisallowChat != null &&
                    this.DisallowChat.Equals(other.DisallowChat)
                ) && 
                (
                    this.PublishMeeting == other.PublishMeeting ||
                    this.PublishMeeting != null &&
                    this.PublishMeeting.Equals(other.PublishMeeting)
                ) && 
                (
                    this.ShowAllAttendeesInMeetingInvite == other.ShowAllAttendeesInMeetingInvite ||
                    this.ShowAllAttendeesInMeetingInvite != null &&
                    this.ShowAllAttendeesInMeetingInvite.Equals(other.ShowAllAttendeesInMeetingInvite)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                if (this.AutoRecord != null)
                    hash = hash * 59 + this.AutoRecord.GetHashCode();
                if (this.MuteParticipantsOnEntry != null)
                    hash = hash * 59 + this.MuteParticipantsOnEntry.GetHashCode();
                if (this.EncryptionType != null)
                    hash = hash * 59 + this.EncryptionType.GetHashCode();
                if (this.ModeratorLess != null)
                    hash = hash * 59 + this.ModeratorLess.GetHashCode();
                if (this.VideoBestFit != null)
                    hash = hash * 59 + this.VideoBestFit.GetHashCode();
                if (this.DisallowChat != null)
                    hash = hash * 59 + this.DisallowChat.GetHashCode();
                if (this.PublishMeeting != null)
                    hash = hash * 59 + this.PublishMeeting.GetHashCode();
                if (this.ShowAllAttendeesInMeetingInvite != null)
                    hash = hash * 59 + this.ShowAllAttendeesInMeetingInvite.GetHashCode();
                return hash;
            }
        }
    }

}