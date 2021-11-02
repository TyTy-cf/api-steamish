import { Component, OnInit } from '@angular/core';
import {HttpGamesService} from "../../service/http-games.service";
import {Games} from "../../models/interface/games";

@Component({
  selector: 'app-games-index',
  templateUrl: './games-index.component.html',
  styleUrls: ['./games-index.component.scss']
})
export class GamesIndexComponent implements OnInit {

  games: Array<Games> = [];

  constructor(private httpGamesService: HttpGamesService) { }

  ngOnInit(): void {
    this.httpGamesService.getGames().subscribe((apiPlatformGames) => {
      this.games = apiPlatformGames["hydra:member"];
    });

    this.httpGamesService.getGamesBis().subscribe((comments) => {
      console.log(comments);
    })
  }

}
