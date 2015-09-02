(function() {



    "use strict";
    var app = angular.module('dragDrop', []);
    var TabObjectScene = [0]; 

    //Permet de rendre la directive draggable
    app.directive('draggable', function() {
        return function(scope, element) {
            // this gives us the native JS object
            var el = element[0];

            el.draggable = true;

            //Ajoute simplement la classe drag a l'objet
            //Met l'id dans un data transfert
            el.addEventListener(
                'dragstart',
                function(e) {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('Text', this.id);
                    this.classList.add('drag');
                    //console.log("node.name");
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragend',
                function(e) {
                    this.classList.remove('drag');
                    return false;
                },
                false
            );
        }
    });

    app.directive('droppable', function() {
        return {
            scope: {
                drop: '&',
                //bin: '='
            },
            link: function(scope, element) {
                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function(e) {
                        e.dataTransfer.dropEffect = 'move';
                        // allows us to drop
                        if (e.preventDefault) e.preventDefault();
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragenter',
                    function(e) {
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragleave',
                    function(e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'drop',
                    function(e) {
                        // Stops some browsers from redirecting.
                        if (e.stopPropagation) e.stopPropagation();
                        if(e.preventDefault) { e.preventDefault(); }

                        this.classList.remove('over');


                        var binId = this.id;
                        var item = document.getElementById(e.dataTransfer.getData('Text'));
                        
                        if (this.childNodes.length==0) 
                            {
                                this.appendChild(item);
                                
                                //split la chaine blue 2, blue 5
                                var CoulorObject = item.id.split(" ");
                                //recupere l'emplacement bin et j'emleve le bin
                                TabObjectScene[this.id.substr(3,4)-1]=CoulorObject[0];
                                //TabObjectScene.push(item.id.substr(4));
                                //TabObjectScene.reverse();
                                //console.log(CoulorObject[0]);
                                console.log(TabObjectScene);
                            
                        
                                //console.log(this.childNodes);
                                
                                

                                // call the passed drop function
                                scope.$apply(function(scope) {
                                    var fn = scope.drop();
                                    if ('undefined' !== typeof fn) {
                                        fn(item.id, binId);
                                    }
                                });
                        
                            }

                        return false;
                    },
                    false
                );
            }
        }
    });

    app.controller('DragDropController', function($scope) {
        $scope.message = '';
        $scope.handleDrop = function(item, bin) {
        $scope.message = 'Item ' + item + ' has been dropped into ' + bin;
        }
    });

    $( "#send" ).click(function() {
        alert( "Handler for .click() called.");
        //console.log(TabObjectScene[0]);
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/colors',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'couleur1': TabObjectScene[0], 'couleur2': TabObjectScene[1], 'couleur3': TabObjectScene[2], 'couleur4': TabObjectScene[3]},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
     $( "#InitialPosition" ).click(function() {


        
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/InitialPose',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'pose': "{'position':(0.6,-0.5,1),'orientation':(0.7071067811865476, 0.0, 0.7071067811865475, 0.0),'use_left_arm':False}"},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
     $( "#Expe1" ).click(function() {
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/Experiment',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'experiment': "1"},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
          $( "#Expe15" ).click(function() {
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/Experiment',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'experiment': "15"},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
               $( "#Expe2" ).click(function() {
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/Experiment',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'experiment': "2"},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
                    $( "#Expe3" ).click(function() {
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/Experiment',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'experiment': "3"},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
     $( "#Expe4" ).click(function() {
            $.ajax({
                type: "POST",
                url:  'http://138.25.61.11:8888/Experiment',
                // The key needs to match your method's input parameter (case-sensitive).
                data: {'experiment': "4"},
                //data: { my_list:JSON.stringify(TabObjectScene)},
                //contentType: "application/json",
                dataType: "json",
                success: function(data){alert(data);},
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });

    $( "#reset" ).click(function() {
        location.reload();
        });
    $( "#reset" ).click(function() {
        location.reload();
        });
}());