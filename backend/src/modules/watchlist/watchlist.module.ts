import { Module } from '@nestjs/common';
import { WatchlistController } from './watchlist.controller';
import { WatchlistService } from './watchlist.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {WatchList} from "./models/watchlist.model";

@Module({
  imports: [SequelizeModule.forFeature([WatchList])], //импорт модуля для работы с БД в модели WatchList
  controllers: [WatchlistController],
  providers: [WatchlistService]
})
export class WatchlistModule {}
