directiveApp.directive("myAutocomplete", function () {
    function link(scope,element,attrs){
        $(element).autocomplete({
            source: scope.$eval(attrs.myAutocomplete),
            select: function (ev, ui){
                ev.preventDefault();
                if(ui.item){
                    scope.optionSelected(ui.item.value)
                }
            },
            focus: function (ev, ui){
                ev.preventDefault()
                $(this).val(ui.item.label)
            }
        });
    }
    return {
        link: link
    };
});
directiveApp.directive('backImg', function () {
    return function (scope, element, attrs) {
        attrs.$observe('backImg', function (value) {
            element.css({
                "background": "url(" + value + ")",
                "background-size": "cover",
                "background-position": "center"
            });
        });
    }
});
directiveApp.controller("directiveController", function ($scope, $http) {
    $scope.repositorios = []
    $http.get("https://api.github.com/users/zcabetoz/repos")
        .then(function (response) {
            $scope.posts = response.data
            for(let i = response.data.length -1 ; i>=0; i--){
                let repo = response.data[i]
                $scope.repositorios.push(repo.name)
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    $scope.optionSelected = function (data){
        $scope.$apply(function (){
            $scope.main_repo = data;
        })
    }
});