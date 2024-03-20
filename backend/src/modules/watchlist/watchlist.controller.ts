import {Body, Controller, Delete, Post, Patch, Get, Req, Query, UseGuards} from '@nestjs/common';
import {WatchlistService} from "./watchlist.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {WatchListDTO} from "./dto";
import {JwtAusGuard} from "../../guards/jwtGuard";
import {WatchList} from "./models/watchlist.model";
import {UpdateUserDTO} from "../user/dto";
import {isBoolean} from "class-validator";
import {CreateAssetResponse} from "./responce";

@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService) {}

    @ApiTags('API-watchList')
    @ApiResponse({status: 201, type: CreateAssetResponse})
    @UseGuards(JwtAusGuard)
    @Post('create')
    createAsset(@Body() dto: WatchListDTO, @Req() request) : Promise<CreateAssetResponse> {
        const user = request.user;
        return this.watchlistService.createAsset(user, dto);
    }

    @ApiTags('API-watchList')
    @ApiResponse({status: 200})
    @UseGuards(JwtAusGuard)
    @Delete('delete')
    deleteAsset(@Req() request, @Query("id") id : string):Promise<boolean> {
        const userId  = request.user.id;
        return this.watchlistService.deleteAsset(userId, id);
    }
}
