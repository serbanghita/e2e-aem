import os from "os";

export default {
    users: {
        default: {
            username: "admin",
            password: "admin"
        }
    },
    instance: {
        port: process.env.CQ_PORT || 4502,
        host: process.env.CQ_HOST || os.hostname(),
        getUrl: function() {
            return `http://${this.host}:${this.port}`;
        },
        getPackMgrUrl: function() {
            return `${this.getUrl()}/crx/packmgr/service.jsp`;
        },
        getPackMgrUninstUrl: function() {
            return `${this.getUrl()}/crx/packmgr/service/.json/etc/packages/my_packages/[name].zip?cmd=uninstall`;
        },
        getAuthorizableUrl: function() {
            return `${this.getUrl()}/libs/granite/security/post/authorizables`;
        },
        getAdminGroupUrl: function() {
            return `${this.getUrl()}/home/groups/a/administrators.rw.html`;
        }
    }
};