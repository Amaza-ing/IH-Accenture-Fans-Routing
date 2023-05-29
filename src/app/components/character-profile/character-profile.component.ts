import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterInterface } from 'src/app/interfaces/character-interface';
import { CharactersRequestsService } from 'src/app/services/characters-requests.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit {

  character!: any;

  constructor(
    private characterRequestsService: CharactersRequestsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params["id"]);
    const id = this.activatedRoute.snapshot.params["id"];

    this.characterRequestsService.getCharacter(id).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.character = data;       
        },
        error: (e) => {
          console.log(e);
          this.goBack();         
        }
      }
    )    
  }

  goBack(): void {
    this.router.navigate(["/characters"]);
  }

}
