import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

    youtubeUrl="https://www.googleapis.com/youtube/v3";
    apikey="AIzaSyAP9AIBBuimzsERXCjtKc8irSHoOhS02NY";
    playlist="UUStaiwu-FAgp_RC_tBiLh9A";
    private nextPageToken: string = "";

     constructor(private http: HttpClient) { }

     getVideos(): Observable<any> {
       let params = new HttpParams();
       params = params.set('part', 'snippet');
       params = params.set('maxResults', '10');
       params = params.set('playlistId', this.playlist);
       params = params.set('key', this.apikey);
       return this.http.get(`${this.youtubeUrl}/playlistItems`, { params }).pipe(
         map(
           (data: any) => {
             this.nextPageToken = data.nextPageToken;

             let videos: any[] = [];
             for (let video of data.items) {
               let snippet = video.snippet;
               videos.push(snippet);
             }
             return videos;
           }
         )
       );
     }
   }
