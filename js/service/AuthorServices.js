/**
 * Created by tiancheng on 10/25/15.
 */
angular.module("healsis.authorServices", ['healsis.dataServices', 'healsis.sharedServices'])

  .service('authorService', ['dataService', 'sharedService', function (dataService, sharedService) {

    // authentication management
    this.AuthorManage = function (tk, callback) {
      var ambassador = sharedService.getAmbassadorInfo();
      if (ambassador == null || ambassador == "") {
        dataService.getAmbassadorInfo(tk, function (data, status) {
          if (data.result === "success") {
            sharedService.registerAmbassador(data.info);
            callback(data);
          } else {
            alert(data.message);
          }
        });
      }
      else {
        setTimeout(function () {
          callback({result: "success", info: ambassador});
        }, 0);
      }
    };

  }]);