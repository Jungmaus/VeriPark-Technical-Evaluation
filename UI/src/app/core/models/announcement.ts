import { AnnouncementTypeEnum } from '../enums/announcementType';

export class Announcement {
    id: number;
    title: string;
    description: string;
    date: Date;
    announcementType: AnnouncementTypeEnum;
}
