import { Injectable } from "@angular/core";
import { UsefulLinks } from "./useful-links";
import { UsefulLink } from "./useful-link";

@Injectable()
export class UsefulLinksService {
    private list: UsefulLinks;
    private socialList: UsefulLinks;
    constructor() {
        this.list = {
            usefullinksList: [
                {
                    title: "Προστασία Δεδομένων Προσωπικού Χαρακτήρα",
                    url: "/help",
                },
                {
                    title: "Ηοw-to videos",
                    url: "/login-warning",
                },
                {
                    title: "Συμβατότητα με browsers",
                    url: "/browser-compatibility",
                },
                {
                    title: "Cookies",
                    url: "/manuals",
                },
                {
                    title: "Εγχειρίδια - οδηγίες",
                    url: "/manuals",
                },
            ],
        };
        this.socialList = {
            usefullinksList: [
                {
                    title: "Facebook",
                    url: "https://www.facebook.com/demoralizeband",
                },
                {
                    title: "Instagram",
                    url: "https://www.instagram.com/demoralizeband/",
                },
                {
                    title: "YouTube",
                    url: "https://www.youtube.com/channel/UCET5N6gS2W4lVIYCHFQOkuQ",
                },


            ],
        };
    }
    get links(): UsefulLink[] {
        return this.list.usefullinksList;
    }
    get socialLinks(): UsefulLink[] {
        return this.socialList.usefullinksList;
    }
}