import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { MangaService} from '../services/manga.service';
import { Manga } from '../model/manga.model';


@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styles: []
})
export class UpdateMangaComponent implements OnInit {
  currentManga = new Manga();
  constructor(private activatedRoute: ActivatedRoute, private  router :Router,private mangaService: MangaService) { 

  }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.currentManga = this.mangaService.consulterManga(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentManga);
  }
  updateManga() {
    this.mangaService.updateManga(this.currentManga);
    this.router.navigate(['mangas']);
  }
  

}
