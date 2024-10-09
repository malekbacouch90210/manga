import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
})
export class AddMangaComponent implements OnInit {
  newManga = new Manga();

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void { }

  addManga() {
    this.mangaService.ajouterManga(this.newManga);
    this.newManga = new Manga();
  }
}
