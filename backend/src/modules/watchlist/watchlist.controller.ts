import {Body, Controller, Delete, Post, Patch, Get, Req, Query, UseGuards} from '@nestjs/common';
import {WatchlistService} from "./watchlist.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {WatchListDTO} from "./dto";
import {JwtAusGuard} from "../../guards/jwtGuard";
import {WatchList} from "./models/watchlist.model";

@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService) {}

    @ApiTags('API')
    @ApiResponse({status: 201, type: WatchListDTO})
    @UseGuards(JwtAusGuard)
    @Post('create')
    createAsset(@Body() dto: WatchListDTO, @Req() request) : Promise<WatchListDTO> {
        const user = request.user;
        return this.watchlistService.createAsset(user, dto);
    }

    @ApiTags('API')
    @ApiResponse({status: 200, type: WatchListDTO})
    @Get('get-all')
    getAllAssets(){
        return
    }

    @ApiTags('API')
    @ApiResponse({status: 201, type: WatchListDTO})
    @UseGuards(JwtAusGuard)
    @Patch('update')
    updateAsset(){
        return
    }

    @ApiTags('API')
    @ApiResponse({status: 201, type: WatchListDTO})
    @UseGuards(JwtAusGuard)
    @Delete()
    deleteAsset(@Query('id') id: string) {
        return
    }
}
