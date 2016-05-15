import {Component, OnInit} from 'angular2/core';

import {Skill} from './skill';
import {SkillDetailComponent} from './skill-detail.component.ts';
import {SkillService} from './skill.service.ts';

@Component({
    selector: 'skills',
    templateUrl: 'app/components/skills/skills.component.html',
    directives: [SkillDetailComponent]
})
export class SkillsComponent implements OnInit {
    skills:Skill[];
    selectedSkill:Skill;

    constructor(private _skillService:SkillService) {
    }

    getSkills() {
        this._skillService.getSkills().then(skills => {
            this.skills = skills;
            this.selectedSkill = skills[0];
        });
    }

    ngOnInit() {
        this.getSkills();
    }

    onSelect(skill:Skill) {
        this.selectedSkill = skill;
    }

}