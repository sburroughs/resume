System.register(['angular2/core', 'angular2/router', './skill.service.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, skill_service_ts_1;
    var SkillDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (skill_service_ts_1_1) {
                skill_service_ts_1 = skill_service_ts_1_1;
            }],
        execute: function() {
            SkillDetailComponent = (function () {
                function SkillDetailComponent(_skillService, _routeParams) {
                    this._skillService = _skillService;
                    this._routeParams = _routeParams;
                }
                SkillDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var name = this._routeParams.get('name');
                    this._skillService.getSkill(name)
                        .then(function (skill) { return _this.skill = skill; });
                };
                SkillDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                SkillDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-skill-detail',
                        templateUrl: 'app/components/skills/skill-detail.component.html',
                        styleUrls: ['assets/css/skill-detail.component.css'],
                        inputs: ['skill']
                    }), 
                    __metadata('design:paramtypes', [skill_service_ts_1.SkillService, router_1.RouteParams])
                ], SkillDetailComponent);
                return SkillDetailComponent;
            }());
            exports_1("SkillDetailComponent", SkillDetailComponent);
        }
    }
});
//# sourceMappingURL=skill-detail.component.js.map