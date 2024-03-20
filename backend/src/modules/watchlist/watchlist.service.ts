import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {WatchListDTO} from "./dto";
import {WatchList} from "./models/watchlist.model";

@Injectable()
export class WatchlistService {
    constructor(@InjectModel(WatchList) private readonly watchlistRepository: typeof WatchList) {}
    //создание ассета - валюта
    async createAsset(user, dto: WatchListDTO) {
        await this.watchlistRepository.create({
            user: user.id,
            name: dto.name,
            assetId: dto.assetId
        });
        return dto;
    }
}
