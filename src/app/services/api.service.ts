import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getData(url: string) {
    return this.http.get(url)
  }

  postData(post: any, url: string) {
    return this.http.post(url, post)
  }

  putData (oldPost: any, newPost: any, url: string) {
    return this.http.put(url, {
      old: oldPost,
      new: newPost
    })
  }

  delData (post: any, url: string) {
    return this.http.delete(url, {body: post})
  }

}
