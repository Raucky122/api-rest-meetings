//
// EnterpriseAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation
import Alamofire



open class EnterpriseAPI {
    /**
     * enum for parameter action
     */
    public enum Action_changeEnterpriseTags: String { 
        case add = "add"
        case delete = "delete"
    }

    /**
     Set Enterprise Tags
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter action: (query) Type of operation to be done 
     - parameter tag: (query) The name of tag 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func changeEnterpriseTags(enterpriseId: Int, action: Action_changeEnterpriseTags, tag: String, completion: @escaping ((_ data: TagListComp?,_ error: Error?) -> Void)) {
        changeEnterpriseTagsWithRequestBuilder(enterpriseId: enterpriseId, action: action, tag: tag).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Set Enterprise Tags
     - PUT /v1/enterprise/{enterpriseId}/tags
     - This endpoint modifies the list of profile tags associated with the specified enterprise.
     - API Key:
       - type: apiKey access_token (QUERY)
       - name: access_token
     - examples: [{contentType=application/json, example=""}]
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter action: (query) Type of operation to be done 
     - parameter tag: (query) The name of tag 

     - returns: RequestBuilder<TagListComp> 
     */
    open class func changeEnterpriseTagsWithRequestBuilder(enterpriseId: Int, action: Action_changeEnterpriseTags, tag: String) -> RequestBuilder<TagListComp> {
        var path = "/v1/enterprise/{enterpriseId}/tags"
        let enterpriseIdPreEscape = "\(enterpriseId)"
        let enterpriseIdPostEscape = enterpriseIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{enterpriseId}", with: enterpriseIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
            "action": action.rawValue, 
            "tag": tag
        ])

        let requestBuilder: RequestBuilder<TagListComp>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     Create User
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter enterpriseUser: (body) Basic Enterprise Account information 
     - parameter billingCategory: (query) What general billing group does this profile belong? (optional, default to ENTERPRISE)
     - parameter forcePasswordChange: (query) Create profile and force user to change password on next login (optional)
     - parameter isAdmin: (query) Create this account to have Administrative Privileges for the enterprise (optional)
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createEnterpriseUser(enterpriseId: Int, enterpriseUser: EnterpriseCreateUser, billingCategory: String? = nil, forcePasswordChange: Bool? = nil, isAdmin: Bool? = nil, completion: @escaping ((_ data: UserId?,_ error: Error?) -> Void)) {
        createEnterpriseUserWithRequestBuilder(enterpriseId: enterpriseId, enterpriseUser: enterpriseUser, billingCategory: billingCategory, forcePasswordChange: forcePasswordChange, isAdmin: isAdmin).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Create User
     - POST /v1/enterprise/{enterpriseId}/users
     - This endpoint creates a user profile within the specified enterprise.  It is the first of the 2-step process to create a BlueJeans user.  It should be followed by an API call to create the user's personal meeting room.
     - API Key:
       - type: apiKey access_token (QUERY)
       - name: access_token
     - examples: [{contentType=application/json, example={
  "id" : 0
}}]
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter enterpriseUser: (body) Basic Enterprise Account information 
     - parameter billingCategory: (query) What general billing group does this profile belong? (optional, default to ENTERPRISE)
     - parameter forcePasswordChange: (query) Create profile and force user to change password on next login (optional)
     - parameter isAdmin: (query) Create this account to have Administrative Privileges for the enterprise (optional)

     - returns: RequestBuilder<UserId> 
     */
    open class func createEnterpriseUserWithRequestBuilder(enterpriseId: Int, enterpriseUser: EnterpriseCreateUser, billingCategory: String? = nil, forcePasswordChange: Bool? = nil, isAdmin: Bool? = nil) -> RequestBuilder<UserId> {
        var path = "/v1/enterprise/{enterpriseId}/users"
        let enterpriseIdPreEscape = "\(enterpriseId)"
        let enterpriseIdPostEscape = enterpriseIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{enterpriseId}", with: enterpriseIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: enterpriseUser)

        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
            "billingCategory": billingCategory, 
            "forcePasswordChange": forcePasswordChange, 
            "isAdmin": isAdmin
        ])

        let requestBuilder: RequestBuilder<UserId>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }

    /**
     Export Enterprise Users
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func exportUsers(enterpriseId: Int, completion: @escaping ((_ data: Void?,_ error: Error?) -> Void)) {
        exportUsersWithRequestBuilder(enterpriseId: enterpriseId).execute { (response, error) -> Void in
            if error == nil {
                completion((), error)
            } else {
                completion(nil, error)
            }
        }
    }


    /**
     Export Enterprise Users
     - GET /v1/enterprise/{enterprise_id}/users/export
     - This endpoint exports existing users into a CSV file.
     - API Key:
       - type: apiKey access_token (QUERY)
       - name: access_token
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 

     - returns: RequestBuilder<Void> 
     */
    open class func exportUsersWithRequestBuilder(enterpriseId: Int) -> RequestBuilder<Void> {
        var path = "/v1/enterprise/{enterprise_id}/users/export"
        let enterpriseIdPreEscape = "\(enterpriseId)"
        let enterpriseIdPostEscape = enterpriseIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{enterprise_id}", with: enterpriseIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
        ])

        let requestBuilder: RequestBuilder<Void>.Type = SwaggerClientAPI.requestBuilderFactory.getNonDecodableBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     List Enterprise Tags
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getEnterpriseTags(enterpriseId: Int, completion: @escaping ((_ data: TagListComp?,_ error: Error?) -> Void)) {
        getEnterpriseTagsWithRequestBuilder(enterpriseId: enterpriseId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     List Enterprise Tags
     - GET /v1/enterprise/{enterpriseId}/tags
     - This endpoint retrieves all profile tags defined for the specified enterprise.
     - API Key:
       - type: apiKey access_token (QUERY)
       - name: access_token
     - examples: [{contentType=application/json, example=""}]
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 

     - returns: RequestBuilder<TagListComp> 
     */
    open class func getEnterpriseTagsWithRequestBuilder(enterpriseId: Int) -> RequestBuilder<TagListComp> {
        var path = "/v1/enterprise/{enterpriseId}/tags"
        let enterpriseIdPreEscape = "\(enterpriseId)"
        let enterpriseIdPostEscape = enterpriseIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{enterpriseId}", with: enterpriseIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
        ])

        let requestBuilder: RequestBuilder<TagListComp>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     Remove Enterprise User
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter userId: (path) The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint. 
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func removeUser(enterpriseId: Int, userId: Int, completion: @escaping ((_ data: Void?,_ error: Error?) -> Void)) {
        removeUserWithRequestBuilder(enterpriseId: enterpriseId, userId: userId).execute { (response, error) -> Void in
            if error == nil {
                completion((), error)
            } else {
                completion(nil, error)
            }
        }
    }


    /**
     Remove Enterprise User
     - DELETE /v1/enterprise/{enterprise_id}/users/{user_id}
     - This endpoint allows removing a user from an enterprise; it does not delete the user. Requires enterprise admin access level.
     - API Key:
       - type: apiKey access_token (QUERY)
       - name: access_token
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter userId: (path) The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint. 

     - returns: RequestBuilder<Void> 
     */
    open class func removeUserWithRequestBuilder(enterpriseId: Int, userId: Int) -> RequestBuilder<Void> {
        var path = "/v1/enterprise/{enterprise_id}/users/{user_id}"
        let enterpriseIdPreEscape = "\(enterpriseId)"
        let enterpriseIdPostEscape = enterpriseIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{enterprise_id}", with: enterpriseIdPostEscape, options: .literal, range: nil)
        let userIdPreEscape = "\(userId)"
        let userIdPostEscape = userIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{user_id}", with: userIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
        ])

        let requestBuilder: RequestBuilder<Void>.Type = SwaggerClientAPI.requestBuilderFactory.getNonDecodableBuilder()

        return requestBuilder.init(method: "DELETE", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

    /**
     * enum for parameter order
     */
    public enum Order_searchUsers: String { 
        case asc = "asc"
        case desc = "desc"
    }

    /**
     Search for User(s)
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter fields: (query) A comma-separated list one or more of these BlueJeans enteprise profile fields to include in the API responses- username, firstName, middleName, lastName, isEnterpriseAdmin, enterpriseJoinDate, email (optional)
     - parameter order: (query) If specificed, order defines how the API sorts results- ascending or descending (optional)
     - parameter sortBy: (query) Name of BlueJeans profile field by with API response data is sorted (optional)
     - parameter textSearch: (query) If specified textSearch provides a string (partial or complete) by which to search the list of BlueJeans users (optional)
     - parameter emailId: (query) If specified, emailId specifies performing a search for the user profile associated with this email address.  Wildcards are &lt;b&gt;not&lt;/b&gt; supported for the email address value. (optional)
     - parameter pageSize: (query) Sets number of items returned per page. (optional)
     - parameter pageNumber: (query) Selects which page of results to return (1-based value) (optional)
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func searchUsers(enterpriseId: Int, fields: String? = nil, order: Order_searchUsers? = nil, sortBy: String? = nil, textSearch: String? = nil, emailId: String? = nil, pageSize: Int? = nil, pageNumber: Int? = nil, completion: @escaping ((_ data: EnterpriseUserSearch?,_ error: Error?) -> Void)) {
        searchUsersWithRequestBuilder(enterpriseId: enterpriseId, fields: fields, order: order, sortBy: sortBy, textSearch: textSearch, emailId: emailId, pageSize: pageSize, pageNumber: pageNumber).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Search for User(s)
     - GET /v1/enterprise/{enterpriseId}/users
     - This endpoint provides a search facility for the specified enterprise.  <ul><li>If textSearch is provided, the results will be a partial string-match search of the given textSearch value.</li><li> Otherwise, the search will return an exact lookup by emailId.</li></ul>
     - API Key:
       - type: apiKey access_token (QUERY)
       - name: access_token
     - examples: [{contentType=application/json, example={
  "count" : 0,
  "user" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "enterpriseJoinDate" : 1,
    "middleName" : "middleName",
    "id" : 6,
    "isEnterpriseAdmin" : true,
    "uri" : "uri",
    "email" : "email",
    "username" : "username"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "enterpriseJoinDate" : 1,
    "middleName" : "middleName",
    "id" : 6,
    "isEnterpriseAdmin" : true,
    "uri" : "uri",
    "email" : "email",
    "username" : "username"
  } ]
}}]
     
     - parameter enterpriseId: (path) The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint. 
     - parameter fields: (query) A comma-separated list one or more of these BlueJeans enteprise profile fields to include in the API responses- username, firstName, middleName, lastName, isEnterpriseAdmin, enterpriseJoinDate, email (optional)
     - parameter order: (query) If specificed, order defines how the API sorts results- ascending or descending (optional)
     - parameter sortBy: (query) Name of BlueJeans profile field by with API response data is sorted (optional)
     - parameter textSearch: (query) If specified textSearch provides a string (partial or complete) by which to search the list of BlueJeans users (optional)
     - parameter emailId: (query) If specified, emailId specifies performing a search for the user profile associated with this email address.  Wildcards are &lt;b&gt;not&lt;/b&gt; supported for the email address value. (optional)
     - parameter pageSize: (query) Sets number of items returned per page. (optional)
     - parameter pageNumber: (query) Selects which page of results to return (1-based value) (optional)

     - returns: RequestBuilder<EnterpriseUserSearch> 
     */
    open class func searchUsersWithRequestBuilder(enterpriseId: Int, fields: String? = nil, order: Order_searchUsers? = nil, sortBy: String? = nil, textSearch: String? = nil, emailId: String? = nil, pageSize: Int? = nil, pageNumber: Int? = nil) -> RequestBuilder<EnterpriseUserSearch> {
        var path = "/v1/enterprise/{enterpriseId}/users"
        let enterpriseIdPreEscape = "\(enterpriseId)"
        let enterpriseIdPostEscape = enterpriseIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{enterpriseId}", with: enterpriseIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
            "fields": fields, 
            "order": order?.rawValue, 
            "sortBy": sortBy, 
            "textSearch": textSearch, 
            "emailId": emailId, 
            "pageSize": pageSize?.encodeToJSON(), 
            "pageNumber": pageNumber?.encodeToJSON()
        ])

        let requestBuilder: RequestBuilder<EnterpriseUserSearch>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

}