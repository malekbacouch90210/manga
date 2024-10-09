import { Injectable } from '@angular/core';
import { Manga } from '../model/manga.model';
import { UpdateMangaComponent } from '../update-manga/update-manga.component';


@Injectable({
  providedIn: 'root'
})
export class MangaService {

  mangas: Manga[];
  manga! :Manga;

  constructor() { 
    this.mangas = [
      { nomManga: "Dragon ball", mangakaManga: "Akira Toriyama", salaireManga: 260.000, dateCreation: new Date("1984-11-20") },
      { nomManga: "HXH", mangakaManga: "Yoshihiro Togashi", salaireManga: 86.000, dateCreation: new Date("1998-03-03") },
      { nomManga: "Detective conan", mangakaManga: "Gosho Aoyama", salaireManga: 270.000, dateCreation: new Date("1994-01-05") },
      { nomManga: "One piece", mangakaManga: "Eiichiro Oda", salaireManga: 516.600, dateCreation: new Date("1997-07-22") },
      { nomManga: "Naruto", mangakaManga: "Masashi Kishimoto", salaireManga: 250.000, dateCreation: new Date("1999-09-21") },
      { nomManga: "Attack on Titan", mangakaManga: "Hajime Isayama", salaireManga: 140.000, dateCreation: new Date("2009-09-09") },
      { nomManga: "20th century boys", mangakaManga: "Naoki Urasawa", salaireManga: 36.000, dateCreation: new Date("1999-10-04") },
      { nomManga: "Homunculus", mangakaManga: "Hideo Yamamoto", salaireManga: 10.120, dateCreation: new Date("2003-03-17") },
      { nomManga: "Berserk", mangakaManga: "Kentaru miura", salaireManga: 60.000, dateCreation: new Date("1989-08-25") },
      { nomManga: "Monster", mangakaManga: "Naoki Urasawa", salaireManga: 20.000, dateCreation: new Date("1994-12-05") },
      { nomManga: "Vagabond", mangakaManga: "Takehiko Inoue", salaireManga: 82.402, dateCreation: new Date("1998-09-03") },
      { nomManga: "Bleach", mangakaManga: "Tite Kubo", salaireManga: 130.000, dateCreation: new Date("2001-08-07") },
      { nomManga: "Fullmetal Alchemist", mangakaManga: "Hiromu Arakawa", salaireManga: 80.12, dateCreation: new Date("2001-07-12") },
    ];
    
  }


  listeManga(): Manga[] {
    return this.mangas;
  }
  

  ajouterManga(manga : Manga){
    this.mangas.push(manga);
  }


  supprimerManga( prod: Manga){
    //supprimer le produit prod du tableau produits
    const index = this.mangas.indexOf(prod, 0);
    if (index > -1) {
      this.mangas.splice(index, 1);
    }
    //ou Bien
    /* this.mangas.forEach((cur, index) => {
    if(prod.nomManga === cur.nomManga) {
    this.mangas.splice(index, 1);
    }
    }); */
    }
    consulterManga(id:string): Manga{
      this.manga = this.mangas.find(p => p.nomManga == id)!;
      return this.manga;
    }
    trierManga(){
      this.mangas = this.mangas.sort((n1,n2) => {
        if (n1.nomManga! > n2.nomManga!) {
        return 1;
      }
      if (n1.nomManga! < n2.nomManga!) {
        return -1;
      }
      return 0;
      });
    }

    updateManga(p:Manga){
      this.supprimerManga(p);
      this.ajouterManga(p);
      this.trierManga();

    }



}
