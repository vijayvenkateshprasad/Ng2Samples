import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HEROES } from './heroes';
import { Hero } from './hero';

@Injectable()
export class MyService {
    getData(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
        setTimeout(resolve, 2000))
        .then(() => Promise.resolve(HEROES))
    }
}