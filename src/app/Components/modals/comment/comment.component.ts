import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService, Comments} from '../../../Services/api/api.service';
import {Globals} from '../../../Globals';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Params} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  URL_REGEXP = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  commentDataForm: FormGroup ;
  comentarios: Comments[];
  constructor(private apiService: ApiService ,   private dialogRef: MatDialogRef<CommentComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { idParticipacion: number, linkVideo: string },
              public globals: Globals) { }

  ngOnInit() {
    this.apiService.getComments(this.data.idParticipacion).subscribe((res) => {
      this.comentarios = res;
    });
    this.URL_REGEXP.test('https://www.youtube.com/watch?v=x0CJKvevs2M');
    this.commentDataForm = new FormGroup({
      usuario: new FormControl(this.globals.getUsuario(), Validators.required),
      texto: new FormControl('', Validators.required),
      participacion: new FormControl(this.data.idParticipacion, Validators.required),
      // tslint:disable-next-line:max-line-length
      idVideo: new FormControl(this.data.linkVideo.match(this.URL_REGEXP)[7], Validators.required),
    });
  }

  submitCommentForm(data: any): void {
    console.log(data);
    if (data.usuario) {
      this.apiService.saveComment(data)
        .subscribe((res: any) => {
          // tslint:disable-next-line:triple-equals
          if (res.message != 'ok') {
            alert(res.message );
          } else {
            alert('Comentario Guardado');
            this.apiService.getComments(data.participacion).subscribe((rta) => {
              this.comentarios = rta;
            });
            // this.dialogRef.close({ username: this.globals.getUsuario(), login: false });
          }
        }, (err) => {
          alert(err.message);
        });
    } else {
      this.onCancelClick();
      alert('Por favor Iniciar Session para poder registrar el comentario');
    }

  }
  onCancelClick(): void {
    this.dialogRef.close({ username: '', login: false });
  }
}
