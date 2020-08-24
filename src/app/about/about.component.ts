import { Component, OnInit } from "@angular/core";
import SkillsJson from "../../assets/docs/skills.json";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.sass"],
})
export class AboutComponent implements OnInit {
  SkillsList: any = SkillsJson;

  constructor() {}

  ngOnInit() {
  }
}
