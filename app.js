var tenant=process.argv[3]
var company=process.argv[4]
var firstname=process.argv[5]
var lastname=process.argv[6]
var username=process.argv[7]
var password=process.argv[8]
var phone=process.argv[9]
var numbr=process.argv[10]
var email=process.argv[11]
var country=process.argv[12]
var province=process.argv[13]
var city=process.argv[14]
var street=process.argv[15]

var User = require('dvp-mongomodels/model/User');
var UserAccount = require('dvp-mongomodels/model/UserAccount');
var Organisation = require('dvp-mongomodels/model/Organisation');
var config = require("config");
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/my_database');
var url='mongodb://'+config.DB.Host+':'+config.DB.Port+'/'+config.DB.Database
mongoose.connect(url,{server:{auto_reconnect:true}})
mongoose.connection.on('error', function (err) {
    console.error( new Error(err));
    mongoose.disconnect();

});
mongoose.connection.on('opening', function() {
    console.log("reconnecting... %d", mongoose.connection.readyState);
});

var user = new User({
    name : name,
    firstname : firstname,
    lastname : lastname,
    username : username,
    password : password,
    multi_login : true,
    phoneNumber : {
        verified : false,
        type : "phone",
        contact : phone
    },
    email : {
        verified : true,
        type : "phone",
        contact : name
    },
    user_meta : {
        role : "superadmin"
    },
    systemuser : true,
    company : company,
    tenant : tenant,
    client_scopes : [
        {
            consoleName : "OPERATOR_CONSOLE",
            menus : [
                {
                    menuItem : "TENANTMONITOR",
                    menuAction : [
                        {
                            scope : "tenant",
                            read : true,
                            write : true,
                            delete : true
                        }
                    ]
                }
            ]
        }
    ],
    user_scopes : [
        {
            scope : "tenant",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "user",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "externaluser",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "userProfile",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "organisation",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "organisationManage",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "package",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "resource",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "console",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "userScope",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "userAppScope",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "myNavigation",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "userGroup",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "tag",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "codec",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "myUserProfile",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "trunk",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "callrule",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "limit",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "sysmonitoring",
            read : true,
            write : true,

        },
        {
            scope : "cluster",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "profile",
            read : true,
            write : true,
            delete : true
        },
        {
            scope : "context",
            read : true,
            write : true,
            delete : true
        }
    ],
    contacts : [],
    __v : 0,
    birthday : Date.now(),
    gender : "male",
    avatar : "",
    address : {
        number : numbr,
        street : street,
        city : city,
        province : province,
        country : country,
        zipcode : "00300"
    },
    verified : true,
    group : "58466e3e9e5db600019768bb",
    locale : "en",
    app_meta : {
        subject : "test2",
        priority : "urgent",
        description : "test2"
    },
    Active : true,
    security_level : 1
});
user.save(function (err, result) {
    console.log(err, result)
    // process.exit()
})
var UserAccount = new UserAccount({
        userref : "59008ddd8ef913c5096e5492",
        user_meta : {
            role : "superadmin"
        },
        user : name,
        tenant : 1,
        company : 1,
        created_at : Date.now(),
        updated_at : Date.now(),
        multi_login : false,
        client_scopes : [
            {
                consoleName : "OPERATOR_CONSOLE",
                _id : "599d0ab7d56cbb000171925c",
                menus : [
                    {
                        menuItem : "TENANTMONITOR",
                        _id : "599d0ab7d56cbb000171925d",
                        menuAction : [
                            {
                                scope : "tenant",
                                read : true,
                                write : true,
                                delete : true
                            }
                        ]
                    }
                ]
            },
            {
                consoleName : "AGENT_CONSOLE",
                _id : "599d0ab7d56cbb0001719257",
                menus : []
            },
            {
                consoleName : "SUPERVISOR_CONSOLE",
                _id : "599d0ab7d56cbb0001719258",
                menus : [
                    {
                        menuItem : "BILLING_HISTORY",
                        _id : "599d0ab7d56cbb000171925b",
                        menuAction : [
                            {
                                scope : "wallet",
                                feature : "wallet access",
                                read : true
                            }
                        ]
                    },
                    {
                        menuItem : "CREDIT_MANAGER",
                        _id : "599d0ab7d56cbb000171925a",
                        menuAction : [
                            {
                                scope : "wallet",
                                feature : "wallet access",
                                read : true,
                                write : true,
                                delete : true
                            }
                        ]
                    },
                    {
                        menuItem : "PACKAGE_MANAGER",
                        _id : "599d0ab7d56cbb0001719259",
                        menuAction : [
                            {
                                scope : "organisation",
                                feature : "organisation access",
                                read : true,
                                write : true
                            }
                        ]
                    }
                ]
            },
            {
                consoleName : "DIGIN_CONSOLE",
                _id : "5a60944ccb50ab00016b9e8f",
                menus : [
                    {
                        menuItem : "DIGIN",
                        _id : "5a6192b7bc10b200012f0c52",
                        menuAction : [
                            {
                                scope : "hierarchicalsummary",
                                feature : "CreateHierarchicalSummary",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "linear_regression",
                                feature : "LinearRegression",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "gethighestlevel",
                                feature : "GetHighestLevel",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "generateboxplot",
                                feature : "BoxPlotGeneration",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "set_init_user_settings",
                                feature : "SetInitialUserEnvironment",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_component_by_comp_id",
                                feature : "GetComponentByCompID",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_usage_details",
                                feature : "GetUsageDetails",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "activate_packages",
                                feature : "ActivatePackages",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "store_datasource_config",
                                feature : "StoreDataSourceConfig",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "datasource_delete",
                                feature : "DatasourceDelete",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "process_association_rule",
                                feature : "AssociationAnalysis",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "buildwordcloud",
                                feature : "BuildWordCloud",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "buildbipartite",
                                feature : "BuildBiPartite",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "generatehist",
                                feature : "HistogramGeneration",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "GetFields",
                                feature : "GetFields",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "delete_components",
                                feature : "DeleteComponents",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "clustering_kmeans",
                                feature : "ClusteringKmeans",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_packages",
                                feature : "GetPackages",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_all_databases",
                                feature : "GetAllDatabases",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_version",
                                feature : "GetServiceVersions",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "update_user_settings",
                                feature : "UpdateUserSettings",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "getsentiment",
                                feature : "GetSentiment",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "aggregatefields",
                                feature : "AggregateFields",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "file_upload",
                                feature : "Upload",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "createDataset",
                                feature : "CreateDataset",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_all_components",
                                feature : "GetAllComponents",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_usage_summary",
                                feature : "GetUsageSummary",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "insert_data",
                                feature : "InsertData",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "clear_cache",
                                feature : "ClearCache",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "onsite_user_save",
                                feature : "OnsiteUserSetting",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "geocoordinate",
                                feature : "GeoCoordinate",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "build_datamodel",
                                feature : "BuildDataModel",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "executeQuery",
                                feature : "ExecuteQuery",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "store_component",
                                feature : "StoreComponent",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_user_settings",
                                feature : "GetUserSettings",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "share_components",
                                feature : "ShareComponents",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "check_subscription",
                                feature : "CheckSubscription",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "test_database_connection",
                                feature : "TestConnection",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "regression_analysis",
                                feature : "RegressionAnalysis",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "cloudcharge_handler",
                                feature : "CloudchargeHandler",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "forecast",
                                feature : "Forecasting",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "generatebubble",
                                feature : "BubbleChart",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "GetTables",
                                feature : "GetTables",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "store_user_settings",
                                feature : "StoreUserSettings",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "fuzzyc_calculation",
                                feature : "ClusteringFuzzyc",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_customer",
                                feature : "GetCustomer",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "get_datasource_config",
                                feature : "GetAllDataSourceConfig",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "process_notifications",
                                feature : "NotificationScheduler",
                                read : true,
                                write : true,
                                delete : true
                            },
                            {
                                scope : "save_redirected_url_data",
                                feature : "SaveRedirectedURLInfo",
                                read : true,
                                write : true,
                                delete : true
                            }
                        ]
                    }
                ]
            }
        ],
        user_scopes : [
            {
                scope : "tenant",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "externaluser",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "organisationManage",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "myNavigation",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "userGroup",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "tag",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "codec",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "myUserProfile",
                read : true,
                write : true,
                delete : true
            },
            {
                delete : true,
                write : true,
                scope : "trunk",
                read : true
            },
            {
                scope : "callrule",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "limit",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "sysmonitoring",
                read : true,
                write : true
            },
            {
                scope : "cluster",
                read : true,
                write : true,
                delete : true
            },
            {
                read : true,
                write : false,
                delete : false,
                scope : "profile"
            },
            {
                delete : true,
                write : true,
                scope : "context",
                read : true
            },
            {
                delete : false,
                write : true,
                scope : "billing",
                read : false
            },
            {
                delete : true,
                write : true,
                scope : "notification",
                read : true
            },
            {
                scope : "ardsrequest",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "requestmeta",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "queue",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "requestserver",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "attribute",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "group",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "ardsresource",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "resourcetaskattribute",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "task",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "productivity",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "Shared",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "taskinfo",
                read : true,
                write : true,
                delete : true
            },
            {
                delete : true,
                write : true,
                scope : "wallet",
                read : true
            },
            {
                scope : "aggregatefields",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "file_upload",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "createDataset",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "gethighestlevel",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "generateboxplot",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "set_init_user_settings",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_component_by_comp_id",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_usage_details",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "activate_packages",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "buildbipartite",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "generatehist",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "GetFields",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "delete_components",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "clustering_kmeans",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_all_components",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_usage_summary",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "insert_data",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "clear_cache",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "onsite_user_save",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "geocoordinate",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "build_datamodel",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "store_datasource_config",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "datasource_delete",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "process_association_rule",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "buildwordcloud",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_packages",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_all_databases",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_version",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "update_user_settings",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "getsentiment",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "forecast",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "generatebubble",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "GetTables",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "store_user_settings",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "fuzzyc_calculation",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_customer",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_datasource_config",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "process_notifications",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "save_redirected_url_data",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "hierarchicalsummary",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "linear_regression",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "executeQuery",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "store_component",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "get_user_settings",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "share_components",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "check_subscription",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "test_database_connection",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "regression_analysis",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "cloudcharge_handler",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "user",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "userProfile",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "organisation",
                read : true,
                write : true
            },
            {
                scope : "resource",
                read : true
            },
            {
                scope : "package",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "console",
                read : true
            },
            {
                scope : "userScope",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "userAppScope",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "userMeta",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "userAppMeta",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "client",
                read : true,
                write : true,
                delete : true
            },
            {
                scope : "clientScope",
                read : true,
                write : true,
                delete : true
            }
        ],
        allowed_file_categories : [],
        verified : true,
        active : true,
        __v : 0,
        group : "58205ef74870360001d049f0"
    }
);
UserAccount.save(function (err, result){
    console.log(err, result)
    // process.exit()
})


var Organisation=new Organisation({
        ownerId : name,
        ownerRef : "576d17f2dd751f010089d15e",
        companyName : name,
        companyEnabled : true,
        id : 1,
        tenant : 1,
        tenantRef : "57a062d903c5f54c13ac441e",
        consoleAccessLimits : [
            {
                accessType : "superadmin",
                accessLimit : 1,
                currentAccess : [
                    name
                ]
            }
        ],
        packages : [],
        packageDetails : [],
        unitDetails : [],
        __v : 0,
        resourceAccessLimits : [],
        codecAccessLimits : [
            {
                codec : "G722",
                codecLimit : 5,
                currentAccess : 0
            },
            {
                codec : "G729",
                codecLimit : 5,
                currentAccess : 0
            },
            {
                codec : "PCMU",
                codecLimit : 5,
                currentAccess : 0
            },
            {
                codec : "PCMA",
                codecLimit : 5,
                currentAccess : 0
            }
        ]
    }
);
Organisation.save(function (err, result){
    console.log(err, result)
    process.exit()
})
