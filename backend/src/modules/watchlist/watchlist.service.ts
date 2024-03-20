import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {WatchListDTO} from "./dto";
import {WatchList} from "./models/watchlist.model";
import {UpdateUserDTO} from "../user/dto";
import {CreateAssetResponse} from "./responce";

@Injectable()
export class WatchlistService {
    constructor(@InjectModel(WatchList) private readonly watchlistRepository: typeof WatchList) {}
    //создание ассета - валюта
    async createAsset(user, dto: WatchListDTO):Promise<CreateAssetResponse> {
        const watchlist = {
            user: user.id,
            name: dto.name,
            assetId: dto.assetId
        }
        await this.watchlistRepository.create(watchlist);
        return watchlist;
    }

    async deleteAsset(userId: number, assetId: string):Promise<boolean> {
        await this.watchlistRepository.destroy({where: {user: userId, id: assetId}});
        return true;
    }
}
