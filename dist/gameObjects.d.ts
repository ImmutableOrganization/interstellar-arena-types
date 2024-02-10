import { Mesh, Vector3 } from 'three';
import { GunOption } from './userStats.js';
export type Entity = {
    dead: boolean;
    health: number;
    id: string;
    position: [number, number, number];
    rotation: [number, number, number];
    keysPressed: Record<string, boolean>;
    model: {
        laserHitbox: Mesh;
        collisionHitbox: Mesh;
    };
};
export type SpawnableEntity = {
    spawnerID: string;
    spawnTime: number;
    spawning: boolean;
} & Entity;
export type Player = {
    gun: GunOption;
    gunAmmo: number;
    cameraRotation: [number, number, number];
    team?: 'green' | 'blue';
    authId?: string;
    username?: string;
    playerOption: typeof PlayerOptions[number];
} & Entity;
export declare const PlayerOptions: readonly ["Benjamin", "William", "Samuel", "Nathaniel", "Charles", "Eleanor", "Victoria", "Margaret"];
export declare const tileTypes: readonly ["Building", "Sign", "Nature", "Road", "Vehicle", "Entity", "Machine", "Food", "Misc", "invalid", "Light"];
export declare const mapObjectFileData: Record<typeof ObjectTypesEnum[number], {
    label: string;
    previewUrl: string;
    type: typeof tileTypes[number];
}>;
export declare const ObjectTypesEnum: readonly ["Player", "PowerUp", "Laser", "Wall", "Floor", "Panel", "Ladder", "Tree1", "Tree2", "Rock", "Stump", "Grass", "Zombie", "Agent Waypoint", "Turret1", "Car01", "Car02", "Car03", "Car04", "Car05", "Car06", "Car07", "Car08", "Circuit_Breaker", "Generator", "Pipe_Valve", "Pump", "Switch_1", "Switch_2", "Switch_3", "Transformer", "Turbine", "Pipe1", "Pipe2", "Pipe3", "Pipe4", "elbolilloduro_busStop_bus.glb", "elbolilloduro_busStop_busStop1.glb", "elbolilloduro_busStop_busStop2.glb", "elbolilloduro_busStop_busStopAd.glb", "elbolilloduro_busStop_busStopSign1.glb", "elbolilloduro_busStop_busStopSign2.glb", "elbolilloduro_busStop_busStopSign3.glb", "elbolilloduro_busStop_concrete.glb", "elbolilloduro_busStop_house.glb", "elbolilloduro_busStop_houseFence.glb", "elbolilloduro_busStop_houseGate.glb", "elbolilloduro_busStop_housePath.glb", "elbolilloduro_busStop_plant1.glb", "elbolilloduro_busStop_plant2.glb", "elbolilloduro_busStop_plant3.glb", "elbolilloduro_busStop_telephonePole1.glb", "elbolilloduro_busStop_telephonePole2.glb", "elbolilloduro_busStop_tree1.glb", "elbolilloduro_busStop_tree2.glb", "elbolilloduro_busStop_tree3.glb", "elbolilloduro_busStop_tree4.glb", "elbolilloduro_gasStation_dumpster.glb", "elbolilloduro_gasStation_gasPumps.glb", "elbolilloduro_gasStation_stationBase.glb", "elbolilloduro_gasStation_washroomNoDoor.glb", "elbolilloduro_gasStation_garbage1.glb", "elbolilloduro_gasStation_iceBox.glb", "elbolilloduro_gasStation_stationDoor.glb", "elbolilloduro_gasStation_garbage2.glb", "elbolilloduro_gasStation_road.glb", "elbolilloduro_gasStation_stationNoDoor.glb", "elbolilloduro_gasStation_garbage3.glb", "elbolilloduro_gasStation_sign.glb", "elbolilloduro_gasStation_washroom.glb", "elbolilloduro_modelPack2_Roads.glb", "elbolilloduro_modelPack2_bush17.glb", "elbolilloduro_modelPack2_garbage9.glb", "elbolilloduro_modelPack2_box1.glb", "elbolilloduro_modelPack2_bush18.glb", "elbolilloduro_modelPack2_hedge.glb", "elbolilloduro_modelPack2_box10.glb", "elbolilloduro_modelPack2_bush19.glb", "elbolilloduro_modelPack2_houseContainer.glb", "elbolilloduro_modelPack2_box11.glb", "elbolilloduro_modelPack2_bush2.glb", "elbolilloduro_modelPack2_houseContainerDoor.glb", "elbolilloduro_modelPack2_box12.glb", "elbolilloduro_modelPack2_bush20.glb", "elbolilloduro_modelPack2_houseContainerNoDoor.glb", "elbolilloduro_modelPack2_box13.glb", "elbolilloduro_modelPack2_bush21.glb", "elbolilloduro_modelPack2_industrialShelf.glb", "elbolilloduro_modelPack2_box14.glb", "elbolilloduro_modelPack2_bush3.glb", "elbolilloduro_modelPack2_lightpole.glb", "elbolilloduro_modelPack2_box15.glb", "elbolilloduro_modelPack2_bush4.glb", "elbolilloduro_modelPack2_shelf0.glb", "elbolilloduro_modelPack2_box16.glb", "elbolilloduro_modelPack2_bush5.glb", "elbolilloduro_modelPack2_shelf1.glb", "elbolilloduro_modelPack2_box17.glb", "elbolilloduro_modelPack2_bush6.glb", "elbolilloduro_modelPack2_tree1.glb", "elbolilloduro_modelPack2_box18.glb", "elbolilloduro_modelPack2_bush7.glb", "elbolilloduro_modelPack2_tree10.glb", "elbolilloduro_modelPack2_box19.glb", "elbolilloduro_modelPack2_bush8.glb", "elbolilloduro_modelPack2_tree11.glb", "elbolilloduro_modelPack2_box2.glb", "elbolilloduro_modelPack2_bush9.glb", "elbolilloduro_modelPack2_tree12.glb", "elbolilloduro_modelPack2_box20.glb", "elbolilloduro_modelPack2_car1.glb", "elbolilloduro_modelPack2_tree13.glb", "elbolilloduro_modelPack2_box21.glb", "elbolilloduro_modelPack2_car2.glb", "elbolilloduro_modelPack2_tree2.glb", "elbolilloduro_modelPack2_box3.glb", "elbolilloduro_modelPack2_container1.glb", "elbolilloduro_modelPack2_tree3.glb", "elbolilloduro_modelPack2_box4.glb", "elbolilloduro_modelPack2_container1full.glb", "elbolilloduro_modelPack2_tree4.glb", "elbolilloduro_modelPack2_box5.glb", "elbolilloduro_modelPack2_container2.glb", "elbolilloduro_modelPack2_tree5.glb", "elbolilloduro_modelPack2_box6.glb", "elbolilloduro_modelPack2_container2full.glb", "elbolilloduro_modelPack2_tree6.glb", "elbolilloduro_modelPack2_box7.glb", "elbolilloduro_modelPack2_container3.glb", "elbolilloduro_modelPack2_tree7.glb", "elbolilloduro_modelPack2_box8.glb", "elbolilloduro_modelPack2_container4.glb", "elbolilloduro_modelPack2_tree8.glb", "elbolilloduro_modelPack2_box9.glb", "elbolilloduro_modelPack2_garbage1.glb", "elbolilloduro_modelPack2_tree9.glb", "elbolilloduro_modelPack2_bush1.glb", "elbolilloduro_modelPack2_garbage10.glb", "elbolilloduro_modelPack2_warehouse.glb", "elbolilloduro_modelPack2_bush10.glb", "elbolilloduro_modelPack2_garbage2.glb", "elbolilloduro_modelPack2_warehouseDoor.glb", "elbolilloduro_modelPack2_bush11.glb", "elbolilloduro_modelPack2_garbage3.glb", "elbolilloduro_modelPack2_warehouseNoDoor.glb", "elbolilloduro_modelPack2_bush12.glb", "elbolilloduro_modelPack2_garbage4.glb", "elbolilloduro_modelPack2_woodfence.glb", "elbolilloduro_modelPack2_bush13.glb", "elbolilloduro_modelPack2_garbage5.glb", "elbolilloduro_modelPack2_woodfence2.glb", "elbolilloduro_modelPack2_bush14.glb", "elbolilloduro_modelPack2_garbage6.glb", "elbolilloduro_modelPack2_woodfencepost.glb", "elbolilloduro_modelPack2_bush15.glb", "elbolilloduro_modelPack2_garbage7.glb", "elbolilloduro_modelPack2_garbage8.glb", "elbolilloduro_modelPack2_garbage9.glb", "elbolilloduro_trailerPark_airconditioning.glb", "elbolilloduro_trailerPark_couch.glb", "elbolilloduro_trailerPark_pan1.glb", "elbolilloduro_trailerPark_spices4.glb", "elbolilloduro_trailerPark_alarmClock.glb", "elbolilloduro_trailerPark_couch1.glb", "elbolilloduro_trailerPark_pic1.glb", "elbolilloduro_trailerPark_stewpot.glb", "elbolilloduro_trailerPark_alarmClock1.glb", "elbolilloduro_trailerPark_cup.glb", "elbolilloduro_trailerPark_pic2.glb", "elbolilloduro_trailerPark_stove.glb", "elbolilloduro_trailerPark_banana.glb", "elbolilloduro_trailerPark_cup1.glb", "elbolilloduro_trailerPark_pic3.glb", "elbolilloduro_trailerPark_table.glb", "elbolilloduro_trailerPark_bananas.glb", "elbolilloduro_trailerPark_cup2.glb", "elbolilloduro_trailerPark_pic4.glb", "elbolilloduro_trailerPark_table1.glb", "elbolilloduro_trailerPark_bed1.glb", "elbolilloduro_trailerPark_cup3.glb", "elbolilloduro_trailerPark_pic5.glb", "elbolilloduro_trailerPark_table2.glb", "elbolilloduro_trailerPark_bed2.glb", "elbolilloduro_trailerPark_cup4.glb", "elbolilloduro_trailerPark_pic6.glb", "elbolilloduro_trailerPark_toaster.glb", "elbolilloduro_trailerPark_blender.glb", "elbolilloduro_trailerPark_cup5.glb", "elbolilloduro_trailerPark_pic7.glb", "elbolilloduro_trailerPark_toilet.glb", "elbolilloduro_trailerPark_book1.glb", "elbolilloduro_trailerPark_curtain1.glb", "elbolilloduro_trailerPark_plant1.glb", "elbolilloduro_trailerPark_toiletpaper.glb", "elbolilloduro_trailerPark_book2.glb", "elbolilloduro_trailerPark_curtain2.glb", "elbolilloduro_trailerPark_plant2.glb", "elbolilloduro_trailerPark_toothbrush.glb", "elbolilloduro_trailerPark_book3.glb", "elbolilloduro_trailerPark_cutlery.glb", "elbolilloduro_trailerPark_plate1.glb", "elbolilloduro_trailerPark_trailer1.glb", "elbolilloduro_trailerPark_book4.glb", "elbolilloduro_trailerPark_cuttingboard.glb", "elbolilloduro_trailerPark_plate2.glb", "elbolilloduro_trailerPark_trailer1noDoor.glb", "elbolilloduro_trailerPark_book5.glb", "elbolilloduro_trailerPark_door1.glb", "elbolilloduro_trailerPark_plate3.glb", "elbolilloduro_trailerPark_trailerAC.glb", "elbolilloduro_trailerPark_book6.glb", "elbolilloduro_trailerPark_door2.glb", "elbolilloduro_trailerPark_pot1.glb", "elbolilloduro_trailerPark_trailerBase.glb", "elbolilloduro_trailerPark_book7.glb", "elbolilloduro_trailerPark_fence1.glb", "elbolilloduro_trailerPark_pot1Lid.glb", "elbolilloduro_trailerPark_trailerDoor.glb", "elbolilloduro_trailerPark_bookshelf.glb", "elbolilloduro_trailerPark_fenceLong.glb", "elbolilloduro_trailerPark_pot1noLid.glb", "elbolilloduro_trailerPark_trailerFence.glb", "elbolilloduro_trailerPark_brush1.glb", "elbolilloduro_trailerPark_fridge.glb", "elbolilloduro_trailerPark_pot2.glb", "elbolilloduro_trailerPark_tree1.glb", "elbolilloduro_trailerPark_bull.glb", "elbolilloduro_trailerPark_fuseBox1.glb", "elbolilloduro_trailerPark_pot2nolid.glb", "elbolilloduro_trailerPark_tree2.glb", "elbolilloduro_trailerPark_cable1.glb", "elbolilloduro_trailerPark_fuseBox2.glb", "elbolilloduro_trailerPark_powerPole.glb", "elbolilloduro_trailerPark_tree3.glb", "elbolilloduro_trailerPark_cable2.glb", "elbolilloduro_trailerPark_garbage1.glb", "elbolilloduro_trailerPark_powerPole1.glb", "elbolilloduro_trailerPark_tree4.glb", "elbolilloduro_trailerPark_cable3.glb", "elbolilloduro_trailerPark_garbage2.glb", "elbolilloduro_trailerPark_powerPost.glb", "elbolilloduro_trailerPark_tree5.glb", "elbolilloduro_trailerPark_cable4.glb", "elbolilloduro_trailerPark_garbage3.glb", "elbolilloduro_trailerPark_radiator.glb", "elbolilloduro_trailerPark_tree6.glb", "elbolilloduro_trailerPark_cable5.glb", "elbolilloduro_trailerPark_garbageCan.glb", "elbolilloduro_trailerPark_radio1.glb", "elbolilloduro_trailerPark_cereal1.glb", "elbolilloduro_trailerPark_garbageCanLid.glb", "elbolilloduro_trailerPark_radio2.glb", "elbolilloduro_trailerPark_treewall1.glb", "elbolilloduro_trailerPark_cereal2.glb", "elbolilloduro_trailerPark_garbageCanNoLid.glb", "elbolilloduro_trailerPark_radio3.glb", "elbolilloduro_trailerPark_treewall2.glb", "elbolilloduro_trailerPark_cereal3.glb", "elbolilloduro_trailerPark_ground.glb", "elbolilloduro_trailerPark_radio4.glb", "elbolilloduro_trailerPark_tube.glb", "elbolilloduro_trailerPark_chair.glb", "elbolilloduro_trailerPark_kettle.glb", "elbolilloduro_trailerPark_radio5.glb", "elbolilloduro_trailerPark_tv.glb", "elbolilloduro_trailerPark_tv1.glb", "elbolilloduro_trailerPark_clotheslin7.glb", "elbolilloduro_trailerPark_kitchenBase.glb", "elbolilloduro_trailerPark_sal.glb", "elbolilloduro_trailerPark_tv2.glb", "elbolilloduro_trailerPark_tv3.glb", "elbolilloduro_trailerPark_clotheslin8.glb", "elbolilloduro_trailerPark_kitchenTop.glb", "elbolilloduro_trailerPark_satellite.glb", "elbolilloduro_trailerPark_vase1.glb", "elbolilloduro_trailerPark_vase2.glb", "elbolilloduro_trailerPark_vase3.glb", "elbolilloduro_trailerPark_vase4.glb", "elbolilloduro_trailerPark_vase5.glb", "elbolilloduro_trailerPark_vase6.glb", "elbolilloduro_trailerPark_clothesline1.glb", "elbolilloduro_trailerPark_lamp1.glb", "elbolilloduro_trailerPark_showerRack.glb", "elbolilloduro_trailerPark_clothesline2.glb", "elbolilloduro_trailerPark_lamp2.glb", "elbolilloduro_trailerPark_showerhandle.glb", "elbolilloduro_trailerPark_clothesline3.glb", "elbolilloduro_trailerPark_light.glb", "elbolilloduro_trailerPark_sink.glb", "elbolilloduro_trailerPark_clothesline4.glb", "elbolilloduro_trailerPark_meat1.glb", "elbolilloduro_trailerPark_sinkHandle.glb", "elbolilloduro_trailerPark_clothesline5.glb", "elbolilloduro_trailerPark_meat2.glb", "elbolilloduro_trailerPark_soap1.glb", "elbolilloduro_trailerPark_clothesline6.glb", "elbolilloduro_trailerPark_meat3.glb", "elbolilloduro_trailerPark_soap2.glb", "elbolilloduro_trailerPark_clotheslinePost.glb", "elbolilloduro_trailerPark_microwave.glb", "elbolilloduro_trailerPark_soap3.glb", "elbolilloduro_trailerPark_wastebin.glb", "elbolilloduro_trailerPark_coffee.glb", "elbolilloduro_trailerPark_oliveoil.glb", "elbolilloduro_trailerPark_spices1.glb", "elbolilloduro_trailerPark_coffee1.glb", "elbolilloduro_trailerPark_oliveoil1.glb", "elbolilloduro_trailerPark_spices2.glb", "elbolilloduro_trailerPark_cookware.glb", "elbolilloduro_trailerPark_pan.glb", "elbolilloduro_trailerPark_spices3.glb", "elbolilloduro_modelPack1_building1.glb", "elbolilloduro_modelPack1_building4.glb", "elbolilloduro_modelPack1_cabin2NoDoor.glb", "elbolilloduro_modelPack1_rock6.glb", "elbolilloduro_modelPack1_building10.glb", "elbolilloduro_modelPack1_building5.glb", "elbolilloduro_modelPack1_cabin2door.glb", "elbolilloduro_modelPack1_rock7.glb", "elbolilloduro_modelPack1_building11.glb", "elbolilloduro_modelPack1_building6.glb", "elbolilloduro_modelPack1_cabin3.glb", "elbolilloduro_modelPack1_rock8.glb", "elbolilloduro_modelPack1_building12.glb", "elbolilloduro_modelPack1_building7.glb", "elbolilloduro_modelPack1_cabin3door.glb", "elbolilloduro_modelPack1_tree1.glb", "elbolilloduro_modelPack1_building14.glb", "elbolilloduro_modelPack1_building8.glb", "elbolilloduro_modelPack1_cabin3noDoor.glb", "elbolilloduro_modelPack1_tree2.glb", "elbolilloduro_modelPack1_building15.glb", "elbolilloduro_modelPack1_building9.glb", "elbolilloduro_modelPack1_rock1.glb", "elbolilloduro_modelPack1_tree3.glb", "elbolilloduro_modelPack1_building16.glb", "elbolilloduro_modelPack1_cabin1.glb", "elbolilloduro_modelPack1_rock2.glb", "elbolilloduro_modelPack1_tree4.glb", "elbolilloduro_modelPack1_building17.glb", "elbolilloduro_modelPack1_cabin1door.glb", "elbolilloduro_modelPack1_rock3.glb", "elbolilloduro_modelPack1_building2.glb", "elbolilloduro_modelPack1_cabin1noDoor.glb", "elbolilloduro_modelPack1_rock4.glb", "elbolilloduro_modelPack1_building3.glb", "elbolilloduro_modelPack1_cabin2.glb", "elbolilloduro_modelPack1_rock5.glb", "elbolilloduro_roads_bridge1pt1.glb", "elbolilloduro_roads_road1pt1.glb", "elbolilloduro_roads_road3pt3.glb", "elbolilloduro_roads_road5pt5.glb", "elbolilloduro_roads_sign15.glb", "elbolilloduro_roads_bridge1pt2.glb", "elbolilloduro_roads_road1pt2.glb", "elbolilloduro_roads_road3pt4.glb", "elbolilloduro_roads_road5pt6.glb", "elbolilloduro_roads_sign2.glb", "elbolilloduro_roads_bridge1pt3.glb", "elbolilloduro_roads_road1pt3.glb", "elbolilloduro_roads_road3pt5.glb", "elbolilloduro_roads_road5pt7.glb", "elbolilloduro_roads_sign3.glb", "elbolilloduro_roads_bridge1pt4.glb", "elbolilloduro_roads_road1pt4.glb", "elbolilloduro_roads_road3pt6.glb", "elbolilloduro_roads_road5pt8.glb", "elbolilloduro_roads_sign4.glb", "elbolilloduro_roads_bridge1pt5.glb", "elbolilloduro_roads_road1pt5.glb", "elbolilloduro_roads_road3pt7.glb", "elbolilloduro_roads_road6pt1.glb", "elbolilloduro_roads_sign5.glb", "elbolilloduro_roads_bridge1pt6.glb", "elbolilloduro_roads_road1pt6.glb", "elbolilloduro_roads_road3pt8.glb", "elbolilloduro_roads_road6pt2.glb", "elbolilloduro_roads_sign6.glb", "elbolilloduro_roads_bridge1pt7.glb", "elbolilloduro_roads_road1pt7.glb", "elbolilloduro_roads_road4pt1.glb", "elbolilloduro_roads_road6pt3.glb", "elbolilloduro_roads_sign7.glb", "elbolilloduro_roads_bridge1pt8.glb", "elbolilloduro_roads_road1pt8.glb", "elbolilloduro_roads_road4pt2.glb", "elbolilloduro_roads_road6pt4.glb", "elbolilloduro_roads_sign8.glb", "elbolilloduro_roads_bridge1pt9.glb", "elbolilloduro_roads_road2pt1.glb", "elbolilloduro_roads_road4pt3.glb", "elbolilloduro_roads_road6pt5.glb", "elbolilloduro_roads_sign9.glb", "elbolilloduro_roads_bridge2pt1.glb", "elbolilloduro_roads_road2pt2.glb", "elbolilloduro_roads_road4pt4.glb", "elbolilloduro_roads_road6pt6.glb", "elbolilloduro_roads_tree1.glb", "elbolilloduro_roads_bridge2pt2.glb", "elbolilloduro_roads_road2pt3.glb", "elbolilloduro_roads_road4pt5.glb", "elbolilloduro_roads_road6pt7.glb", "elbolilloduro_roads_tree2.glb", "elbolilloduro_roads_bridge2pt3.glb", "elbolilloduro_roads_road2pt4.glb", "elbolilloduro_roads_road4pt6.glb", "elbolilloduro_roads_road6pt8.glb", "elbolilloduro_roads_tree3.glb", "elbolilloduro_roads_bridge2pt4.glb", "elbolilloduro_roads_road2pt5.glb", "elbolilloduro_roads_road4pt7.glb", "elbolilloduro_roads_sign1.glb", "elbolilloduro_roads_tree4.glb", "elbolilloduro_roads_bridge2pt5.glb", "elbolilloduro_roads_road2pt6.glb", "elbolilloduro_roads_road4pt8.glb", "elbolilloduro_roads_sign10.glb", "elbolilloduro_roads_tree5.glb", "elbolilloduro_roads_bridge2pt6.glb", "elbolilloduro_roads_road3pt1.glb", "elbolilloduro_roads_road5pt1.glb", "elbolilloduro_roads_sign11.glb", "elbolilloduro_roads_tree6.glb", "elbolilloduro_roads_bridge2pt7.glb", "elbolilloduro_roads_road3pt2.glb", "elbolilloduro_roads_road5pt2.glb", "elbolilloduro_roads_sign12.glb", "elbolilloduro_roads_bridge2pt8.glb", "elbolilloduro_roads_road3pt3.glb", "elbolilloduro_roads_road5pt3.glb", "elbolilloduro_roads_sign13.glb", "elbolilloduro_roads_bridge2pt9.glb", "elbolilloduro_roads_road3pt4.glb", "elbolilloduro_roads_road5pt4.glb", "elbolilloduro_roads_sign14.glb", "elbolilloduro_roads_road3pt5.glb", "elbolilloduro_roads_road5pt5.glb", "elbolilloduro_roads_sign15.glb", "pepperonijabroni_building1.glb", "pepperonijabroni_building4.glb", "pepperonijabroni_building7.glb", "pepperonijabroni_fencePole.glb", "pepperonijabroni_sidewalk.glb", "pepperonijabroni_building2.glb", "pepperonijabroni_building5.glb", "pepperonijabroni_grass.glb", "pepperonijabroni_building3.glb", "pepperonijabroni_building6.glb", "pepperonijabroni_fence.glb", "pepperonijabroni_road.glb"];
export type ObjectTypes = (typeof ObjectTypesEnum)[number];
export declare const EntityTypesSet: readonly ["Zombie", "Turret1"];
export type EntityTypes = (typeof EntityTypesSet)[number];
export type BaseGameObject = {
    position: [number, number, number];
    rotation: [number, number, number];
    name: string;
    uuid: string;
};
export type Laser = BaseGameObject & {
    senderuuid: string;
    start: Vector3;
    end: Vector3;
    uuid: string;
    mesh: Mesh;
    color: string;
    hitPoint: Vector3;
    distance: number;
};
