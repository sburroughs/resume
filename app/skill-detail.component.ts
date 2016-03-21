import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
    selector: 'my-skill-detail',
    templateUrl: 'app/skill-detail.component.html',
    styleUrls: ['styles/skill-detail.component.css'],
    inputs: ['skill']
})
export class SkillDetailComponent implements OnInit {
    skill:Skill;

    constructor(private _skillService:SkillService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let name = this._routeParams.get('name');
        this._skillService.getSkill(name)
            .then(skill => this.skill = skill);
    }

    goBack() {
        window.history.back();
    }
}
