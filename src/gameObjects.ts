import { Mesh, Vector3 } from 'three';
import { GunOption } from './userStats.js';

export type Entity = {
  dead: boolean;
  health: number;
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  keysPressed: Record<string, boolean>;
  model: { laserHitbox: Mesh; collisionHitbox: Mesh; };
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


export const PlayerOptions = [
  'Benjamin',
  'William',
  'Samuel',
  'Nathaniel',
  'Charles',
  'Eleanor',
  'Victoria',
  'Margaret',
] as const;

export const tileTypes = ['Building', 'Sign', 'Nature', 'Tree', 'Road', 'Vehicle', 'Entity', 'Machine', 'Food','Misc', 'invalid','Light'] as const;

export const mapObjectFileData:
    Record<typeof ObjectTypesEnum[number], {
      label: string;
      previewUrl: string;
      type:  typeof tileTypes[number];
    }
> = {
    "Player": {
        "label": "Player",
        "previewUrl": "",
        "type": "Entity"
    },

    "Laser": {
        "label": "Laser",
        "previewUrl": "",
        "type": "Misc"
    },
    "Wall": {
        "label": "Wall",
        "previewUrl": "",
        "type": "invalid"
    },
    "Floor": {
        "label": "Floor",
        "previewUrl": "",
        "type": "invalid"
    },
    "Ladder": {
        "label": "Ladder",
        "previewUrl": "",
        "type": "invalid"
    },
    "Tree1": {
        "label": "Tree1",
        "previewUrl": "",
        "type": "Tree"
    },
    "Tree2": {
        "label": "Tree2",
        "previewUrl": "",
        "type": "Tree"
    },
    "Rock": {
        "label": "Rock",
        "previewUrl": "",
        "type": "Nature"
    },
    "Stump": {
        "label": "Stump",
        "previewUrl": "",
        "type": "Nature"
    },
    "Grass": {
        "label": "Grass",
        "previewUrl": "",
        "type": "Nature"
    },
    "Zombie": {
        "label": "Zombie",
        "previewUrl": "",
        "type": "Entity"
    },
    "Turret1": {
        "label": "Turret1",
        "previewUrl": "",
        "type": "Machine"
    },
    "Agent Waypoint": {
        "label": "Agent Waypoint",
        "previewUrl": "",
        "type": "invalid"
    },
    "Car01": {
        "label": "Car1",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car02": {
        "label": "Car2",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car03": {
        "label": "Car3",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car04": {
        "label": "Car4",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car05": {
        "label": "Car5",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car06": {
        "label": "Car6",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car07": {
        "label": "Car7",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Car08": {
        "label": "Car8",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "Circuit_Breaker": {
        "label": "Circuit_Breaker",
        "previewUrl": "",
        "type": "Machine"
    },
    "Generator": {
        "label": "Generator",
        "previewUrl": "",
        "type": "Machine"
    },
    "Pump": {
        "label": "Pump",
        "previewUrl": "",
        "type": "Machine"
    },
    "Switch_1": {
        "label": "Switch_1",
        "previewUrl": "",
        "type": "Machine"
    },
    "Transformer": {
        "label": "Transformer",
        "previewUrl": "",
        "type": "Machine"
    },
    "Turbine": {
        "label": "Turbine",
        "previewUrl": "",
        "type": "Machine"
    },


    "elbolilloduro_busStop_busStop1.glb": {
        "label": "busStop1",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_busStop_busStop2.glb": {
        "label": "busStop2",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_busStop_busStopAd.glb": {
        "label": "busStopAd",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_busStop_busStopSign1.glb": {
        "label": "busStopSign1",
        "previewUrl": "",
        "type": "Sign"
    },
    "elbolilloduro_busStop_busStopSign2.glb": {
        "label": "busStopSign2",
        "previewUrl": "",
        "type": "Sign"
    },
    "elbolilloduro_busStop_busStopSign3.glb": {
        "label": "busStopSign3",
        "previewUrl": "",
        "type": "Sign"
    },

    "elbolilloduro_busStop_house.glb": {
        "label": "house",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_busStop_houseFence.glb": {
        "label": "houseFence",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_busStop_houseGate.glb": {
        "label": "houseGate",
        "previewUrl": "",
        "type": "Building"
    },
  
    "elbolilloduro_busStop_telephonePole1.glb": {
        "label": "telephonePole1",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_busStop_telephonePole2.glb": {
        "label": "telephonePole2",
        "previewUrl": "",
        "type": "Building"
    },

    "elbolilloduro_gasStation_dumpster.glb": {
        "label": "dumpster",
        "previewUrl": "",
        "type": "Misc"
    },


    "elbolilloduro_gasStation_washroomNoDoor.glb": {
        "label": "washroomNoDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_gasStation_garbage1.glb": {
        "label": "garbage1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_gasStation_iceBox.glb": {
        "label": "iceBox",
        "previewUrl": "",
        "type": "Misc"
    },

    "elbolilloduro_gasStation_garbage2.glb": {
        "label": "garbage2",
        "previewUrl": "",
        "type": "Misc"
    },

    "elbolilloduro_gasStation_garbage3.glb": {
        "label": "garbage3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_gasStation_sign.glb": {
        "label": "sign",
        "previewUrl": "",
        "type": "Sign"
    },

    "elbolilloduro_modelPack2_Roads.glb": {
        "label": "Roads",
        "previewUrl": "",
        "type": "Road"
    },
    "elbolilloduro_modelPack2_bush17.glb": {
        "label": "bush17",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage9.glb": {
        "label": "garbage9",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_box1.glb": {
        "label": "box1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush18.glb": {
        "label": "bush18",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_hedge.glb": {
        "label": "hedge",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_box10.glb": {
        "label": "box10",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush19.glb": {
        "label": "bush19",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_houseContainer.glb": {
        "label": "houseContainer",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack2_box11.glb": {
        "label": "box11",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush2.glb": {
        "label": "bush2",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_box12.glb": {
        "label": "box12",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush20.glb": {
        "label": "bush20",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_houseContainerNoDoor.glb": {
        "label": "houseContainerNoDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack2_box13.glb": {
        "label": "box13",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush21.glb": {
        "label": "bush21",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_industrialShelf.glb": {
        "label": "industrialShelf",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_box14.glb": {
        "label": "box14",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush3.glb": {
        "label": "bush3",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_lightpole.glb": {
        "label": "lightpole",
        "previewUrl": "",
        "type": "Light"
    },
    "elbolilloduro_modelPack2_box15.glb": {
        "label": "box15",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush4.glb": {
        "label": "bush4",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_shelf0.glb": {
        "label": "shelf0",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_box16.glb": {
        "label": "box16",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush5.glb": {
        "label": "bush5",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_shelf1.glb": {
        "label": "shelf1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_box17.glb": {
        "label": "box17",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush6.glb": {
        "label": "bush6",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_tree1.glb": {
        "label": "tree1",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box18.glb": {
        "label": "box18",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush7.glb": {
        "label": "bush7",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_tree10.glb": {
        "label": "tree10",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_bush8.glb": {
        "label": "bush8",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_tree11.glb": {
        "label": "tree11",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box2.glb": {
        "label": "box2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush9.glb": {
        "label": "bush9",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_tree12.glb": {
        "label": "tree12",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box20.glb": {
        "label": "box20",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_car1.glb": {
        "label": "car1",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "elbolilloduro_modelPack2_tree13.glb": {
        "label": "tree13",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box21.glb": {
        "label": "box21",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_car2.glb": {
        "label": "car2",
        "previewUrl": "",
        "type": "Vehicle"
    },
    "elbolilloduro_modelPack2_tree2.glb": {
        "label": "tree2",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box3.glb": {
        "label": "box3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_container1.glb": {
        "label": "container1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_tree3.glb": {
        "label": "tree3",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box4.glb": {
        "label": "box4",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_container1full.glb": {
        "label": "container1full",
        "previewUrl": "",
        "type": "Misc"
    },
 
    "elbolilloduro_modelPack2_box5.glb": {
        "label": "box5",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_container2.glb": {
        "label": "container2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_tree5.glb": {
        "label": "tree5",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box6.glb": {
        "label": "box6",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_container2full.glb": {
        "label": "container2full",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_tree6.glb": {
        "label": "tree6",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box7.glb": {
        "label": "box7",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_container3.glb": {
        "label": "container3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_tree7.glb": {
        "label": "tree7",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box8.glb": {
        "label": "box8",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_container4.glb": {
        "label": "container4",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_tree8.glb": {
        "label": "tree8",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_box9.glb": {
        "label": "box9",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_garbage1.glb": {
        "label": "garbage1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_tree9.glb": {
        "label": "tree9",
        "previewUrl": "",
        "type": "Tree"
    },
    "elbolilloduro_modelPack2_bush1.glb": {
        "label": "bush1",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage10.glb": {
        "label": "garbage10",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_warehouse.glb": {
        "label": "warehouse",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_bush10.glb": {
        "label": "bush10",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage2.glb": {
        "label": "garbage2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_warehouseDoor.glb": {
        "label": "warehouseDoor",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_modelPack2_bush11.glb": {
        "label": "bush11",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage3.glb": {
        "label": "garbage3",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_warehouseNoDoor.glb": {
        "label": "warehouseNoDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack2_bush12.glb": {
        "label": "bush12",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage4.glb": {
        "label": "garbage4",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_woodfence.glb": {
        "label": "woodfence",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack2_bush13.glb": {
        "label": "bush13",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage5.glb": {
        "label": "garbage5",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_woodfence2.glb": {
        "label": "woodfence2",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack2_bush14.glb": {
        "label": "bush14",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage6.glb": {
        "label": "garbage6",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_woodfencepost.glb": {
        "label": "woodfencepost",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack2_bush15.glb": {
        "label": "bush15",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage7.glb": {
        "label": "garbage7",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack2_garbage8.glb": {
        "label": "garbage8",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_airconditioning.glb": {
        "label": "airconditioning",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_couch.glb": {
        "label": "couch",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pan1.glb": {
        "label": "pan1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_spices4.glb": {
        "label": "spices4",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_alarmClock.glb": {
        "label": "alarmClock",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_couch1.glb": {
        "label": "couch1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic1.glb": {
        "label": "pic1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_stewpot.glb": {
        "label": "stewpot",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_alarmClock1.glb": {
        "label": "alarmClock1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_cup.glb": {
        "label": "cup",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic2.glb": {
        "label": "pic2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_stove.glb": {
        "label": "stove",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_banana.glb": {
        "label": "banana",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_cup1.glb": {
        "label": "cup1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic3.glb": {
        "label": "pic3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_table.glb": {
        "label": "table",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_bananas.glb": {
        "label": "bananas",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_cup2.glb": {
        "label": "cup2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic4.glb": {
        "label": "pic4",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_table1.glb": {
        "label": "table1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_bed1.glb": {
        "label": "bed1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_cup3.glb": {
        "label": "cup3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic5.glb": {
        "label": "pic5",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_table2.glb": {
        "label": "table2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_bed2.glb": {
        "label": "bed2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_cup4.glb": {
        "label": "cup4",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic6.glb": {
        "label": "pic6",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_toaster.glb": {
        "label": "toaster",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_blender.glb": {
        "label": "blender",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_cup5.glb": {
        "label": "cup5",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pic7.glb": {
        "label": "pic7",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_toilet.glb": {
        "label": "toilet",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_book1.glb": {
        "label": "book1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_curtain1.glb": {
        "label": "curtain1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_plant1.glb": {
        "label": "plant1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_toiletpaper.glb": {
        "label": "toiletpaper",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_book2.glb": {
        "label": "book2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_curtain2.glb": {
        "label": "curtain2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_plant2.glb": {
        "label": "plant2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_toothbrush.glb": {
        "label": "toothbrush",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_book3.glb": {
        "label": "book3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_cutlery.glb": {
        "label": "cutlery",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_plate1.glb": {
        "label": "plate1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_trailer1.glb": {
        "label": "trailer1",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_book4.glb": {
        "label": "book4",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_cuttingboard.glb": {
        "label": "cuttingboard",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_plate2.glb": {
        "label": "plate2",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_trailer1noDoor.glb": {
        "label": "trailer1noDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_book5.glb": {
        "label": "book5",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_door1.glb": {
        "label": "door1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_plate3.glb": {
        "label": "plate3",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_trailerAC.glb": {
        "label": "trailerAC",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_book6.glb": {
        "label": "book6",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_door2.glb": {
        "label": "door2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pot1.glb": {
        "label": "pot1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_trailerBase.glb": {
        "label": "trailerBase",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_book7.glb": {
        "label": "book7",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_fence1.glb": {
        "label": "fence1",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_pot1Lid.glb": {
        "label": "pot1Lid",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_trailerDoor.glb": {
        "label": "trailerDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_bookshelf.glb": {
        "label": "bookshelf",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_fenceLong.glb": {
        "label": "fenceLong",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_pot1noLid.glb": {
        "label": "pot1noLid",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_trailerFence.glb": {
        "label": "trailerFence",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_brush1.glb": {
        "label": "brush1",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_trailerPark_fridge.glb": {
        "label": "fridge",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_pot2.glb": {
        "label": "pot2",
        "previewUrl": "",
        "type": "Food"
    },

    "elbolilloduro_trailerPark_bull.glb": {
        "label": "bull",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_fuseBox1.glb": {
        "label": "fuseBox1",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_pot2nolid.glb": {
        "label": "pot2nolid",
        "previewUrl": "",
        "type": "Misc"
    },

   
    "elbolilloduro_trailerPark_fuseBox2.glb": {
        "label": "fuseBox2",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_powerPole.glb": {
        "label": "powerPole",
        "previewUrl": "",
        "type": "Machine"
    },

 
    "elbolilloduro_trailerPark_garbage1.glb": {
        "label": "garbage1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_powerPole1.glb": {
        "label": "powerPole1",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_garbage2.glb": {
        "label": "garbage2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_powerPost.glb": {
        "label": "powerPost",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_garbage3.glb": {
        "label": "garbage3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_radiator.glb": {
        "label": "radiator",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_garbageCan.glb": {
        "label": "garbageCan",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_radio1.glb": {
        "label": "radio1",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_cereal1.glb": {
        "label": "cereal1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_garbageCanLid.glb": {
        "label": "garbageCanLid",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_radio2.glb": {
        "label": "radio2",
        "previewUrl": "",
        "type": "Machine"
    },

    "elbolilloduro_trailerPark_cereal2.glb": {
        "label": "cereal2",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_garbageCanNoLid.glb": {
        "label": "garbageCanNoLid",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_radio3.glb": {
        "label": "radio3",
        "previewUrl": "",
        "type": "Machine"
    },

    "elbolilloduro_trailerPark_cereal3.glb": {
        "label": "cereal3",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_radio4.glb": {
        "label": "radio4",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_tube.glb": {
        "label": "tube",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_chair.glb": {
        "label": "chair",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_kettle.glb": {
        "label": "kettle",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_radio5.glb": {
        "label": "radio5",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_tv.glb": {
        "label": "tv",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_tv1.glb": {
        "label": "tv1",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_clotheslin7.glb": {
        "label": "clotheslin7",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_kitchenBase.glb": {
        "label": "kitchenBase",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_sal.glb": {
        "label": "sal",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_tv2.glb": {
        "label": "tv2",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_tv3.glb": {
        "label": "tv3",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_clotheslin8.glb": {
        "label": "clotheslin8",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_kitchenTop.glb": {
        "label": "kitchenTop",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_satellite.glb": {
        "label": "satellite",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_vase1.glb": {
        "label": "vase1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_vase2.glb": {
        "label": "vase2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_vase3.glb": {
        "label": "vase3",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_vase4.glb": {
        "label": "vase4",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_vase5.glb": {
        "label": "vase5",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_vase6.glb": {
        "label": "vase6",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_lamp1.glb": {
        "label": "lamp1",
        "previewUrl": "",
        "type": "Light"
    },
    "elbolilloduro_trailerPark_showerRack.glb": {
        "label": "showerRack",
        "previewUrl": "",
        "type": "Misc"
    },

    "elbolilloduro_trailerPark_lamp2.glb": {
        "label": "lamp2",
        "previewUrl": "",
        "type": "Machine"
    },
    "elbolilloduro_trailerPark_showerhandle.glb": {
        "label": "showerhandle",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_light.glb": {
        "label": "light",
        "previewUrl": "",
        "type": "Light"
    },
    "elbolilloduro_trailerPark_sink.glb": {
        "label": "sink",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_meat1.glb": {
        "label": "meat1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_sinkHandle.glb": {
        "label": "sinkHandle",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_meat2.glb": {
        "label": "meat2",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_soap1.glb": {
        "label": "soap1",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_meat3.glb": {
        "label": "meat3",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_soap2.glb": {
        "label": "soap2",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_clotheslinePost.glb": {
        "label": "clotheslinePost",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_microwave.glb": {
        "label": "microwave",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_soap3.glb": {
        "label": "soap3",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_trailerPark_wastebin.glb": {
        "label": "wastebin",
        "previewUrl": "",
        "type": "Misc"
    },
    "elbolilloduro_trailerPark_coffee.glb": {
        "label": "coffee",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_oliveoil.glb": {
        "label": "oliveoil",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_spices1.glb": {
        "label": "spices1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_coffee1.glb": {
        "label": "coffee1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_oliveoil1.glb": {
        "label": "oliveoil1",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_spices2.glb": {
        "label": "spices2",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_cookware.glb": {
        "label": "cookware",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_pan.glb": {
        "label": "pan",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_trailerPark_spices3.glb": {
        "label": "spices3",
        "previewUrl": "",
        "type": "Food"
    },
    "elbolilloduro_modelPack1_building1.glb": {
        "label": "building1",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_building4.glb": {
        "label": "building4",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin2NoDoor.glb": {
        "label": "cabin2NoDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock6.glb": {
        "label": "rock6",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack1_building10.glb": {
        "label": "building10",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_building5.glb": {
        "label": "building5",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin2door.glb": {
        "label": "cabin2door",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock7.glb": {
        "label": "rock7",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack1_building11.glb": {
        "label": "building11",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_building6.glb": {
        "label": "building6",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin3.glb": {
        "label": "cabin3",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock8.glb": {
        "label": "rock8",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack1_building12.glb": {
        "label": "building12",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_building7.glb": {
        "label": "building7",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin3door.glb": {
        "label": "cabin3door",
        "previewUrl": "",
        "type": "Building"
    },

    "elbolilloduro_modelPack1_building14.glb": {
        "label": "building14",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_building8.glb": {
        "label": "building8",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin3noDoor.glb": {
        "label": "cabin3noDoor",
        "previewUrl": "",
        "type": "Building"
    },

    "elbolilloduro_modelPack1_building15.glb": {
        "label": "building15",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_building9.glb": {
        "label": "building9",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock1.glb": {
        "label": "rock1",
        "previewUrl": "",
        "type": "Nature"
    },

    "elbolilloduro_modelPack1_building16.glb": {
        "label": "building16",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin1.glb": {
        "label": "cabin1",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock2.glb": {
        "label": "rock2",
        "previewUrl": "",
        "type": "Nature"
    },

    "elbolilloduro_modelPack1_building17.glb": {
        "label": "building17",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin1door.glb": {
        "label": "cabin1door",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock3.glb": {
        "label": "rock3",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack1_building2.glb": {
        "label": "building2",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin1noDoor.glb": {
        "label": "cabin1noDoor",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock4.glb": {
        "label": "rock4",
        "previewUrl": "",
        "type": "Nature"
    },
    "elbolilloduro_modelPack1_building3.glb": {
        "label": "building3",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_cabin2.glb": {
        "label": "cabin2",
        "previewUrl": "",
        "type": "Building"
    },
    "elbolilloduro_modelPack1_rock5.glb": {
        "label": "rock5",
        "previewUrl": "",
        "type": "Nature"
    },
    Panel: {
        label: 'Panel',
        previewUrl: '',
        type: 'Building'
    },
    BuyableItem: {
        label: 'BuyableItem',
        previewUrl: '',
        type: 'Building'
    },
}

export const ObjectTypesEnum = ['Player', "BuyableItem",
 'Laser', 'Wall', 'Floor', 'Panel', 'Ladder',
  'Tree1', 'Tree2', 'Rock', 'Stump', 'Grass',
  'Zombie', 'Agent Waypoint','Turret1',
  'Car01', 'Car02', 'Car03', 'Car04', 'Car05', 'Car06', 'Car07', 'Car08',
  'Circuit_Breaker', 'Generator', 'Pump', 'Switch_1',  'Transformer', 'Turbine',
  "elbolilloduro_busStop_busStop1.glb",
  "elbolilloduro_busStop_busStop2.glb",
  "elbolilloduro_busStop_busStopAd.glb",
  "elbolilloduro_busStop_busStopSign1.glb",
  "elbolilloduro_busStop_busStopSign2.glb",
  "elbolilloduro_busStop_busStopSign3.glb",
  "elbolilloduro_busStop_house.glb",
  "elbolilloduro_busStop_houseFence.glb",
  "elbolilloduro_busStop_houseGate.glb",
  "elbolilloduro_busStop_telephonePole1.glb",
  "elbolilloduro_busStop_telephonePole2.glb",
  "elbolilloduro_gasStation_dumpster.glb",
  "elbolilloduro_gasStation_washroomNoDoor.glb",
  "elbolilloduro_gasStation_garbage1.glb",
  "elbolilloduro_gasStation_iceBox.glb",
  "elbolilloduro_gasStation_garbage2.glb",
  "elbolilloduro_gasStation_garbage3.glb",
  "elbolilloduro_gasStation_sign.glb",
  "elbolilloduro_modelPack2_Roads.glb",
  "elbolilloduro_modelPack2_bush17.glb",
  "elbolilloduro_modelPack2_garbage9.glb",
  "elbolilloduro_modelPack2_box1.glb",
  "elbolilloduro_modelPack2_bush18.glb",
  "elbolilloduro_modelPack2_hedge.glb",
  "elbolilloduro_modelPack2_box10.glb",
  "elbolilloduro_modelPack2_bush19.glb",
  "elbolilloduro_modelPack2_houseContainer.glb",
  "elbolilloduro_modelPack2_box11.glb",
  "elbolilloduro_modelPack2_bush2.glb",
  "elbolilloduro_modelPack2_box12.glb",
  "elbolilloduro_modelPack2_bush20.glb",
  "elbolilloduro_modelPack2_houseContainerNoDoor.glb",
  "elbolilloduro_modelPack2_box13.glb",
  "elbolilloduro_modelPack2_bush21.glb",
  "elbolilloduro_modelPack2_industrialShelf.glb",
  "elbolilloduro_modelPack2_box14.glb",
  "elbolilloduro_modelPack2_bush3.glb",
  "elbolilloduro_modelPack2_lightpole.glb",
  "elbolilloduro_modelPack2_box15.glb",
  "elbolilloduro_modelPack2_bush4.glb",
  "elbolilloduro_modelPack2_shelf0.glb",
  "elbolilloduro_modelPack2_box16.glb",
  "elbolilloduro_modelPack2_bush5.glb",
  "elbolilloduro_modelPack2_shelf1.glb",
  "elbolilloduro_modelPack2_box17.glb",
  "elbolilloduro_modelPack2_bush6.glb",
  "elbolilloduro_modelPack2_tree1.glb",
  "elbolilloduro_modelPack2_box18.glb",
  "elbolilloduro_modelPack2_bush7.glb",
  "elbolilloduro_modelPack2_tree10.glb",
  "elbolilloduro_modelPack2_bush8.glb",
  "elbolilloduro_modelPack2_tree11.glb",
  "elbolilloduro_modelPack2_box2.glb",
  "elbolilloduro_modelPack2_bush9.glb",
  "elbolilloduro_modelPack2_tree12.glb",
  "elbolilloduro_modelPack2_box20.glb",
  "elbolilloduro_modelPack2_car1.glb",
  "elbolilloduro_modelPack2_tree13.glb",
  "elbolilloduro_modelPack2_box21.glb",
  "elbolilloduro_modelPack2_car2.glb",
  "elbolilloduro_modelPack2_tree2.glb",
  "elbolilloduro_modelPack2_box3.glb",
  "elbolilloduro_modelPack2_container1.glb",
  "elbolilloduro_modelPack2_tree3.glb",
  "elbolilloduro_modelPack2_box4.glb",
  "elbolilloduro_modelPack2_container1full.glb",
  "elbolilloduro_modelPack2_box5.glb",
  "elbolilloduro_modelPack2_container2.glb",
  "elbolilloduro_modelPack2_tree5.glb",
  "elbolilloduro_modelPack2_box6.glb",
  "elbolilloduro_modelPack2_container2full.glb",
  "elbolilloduro_modelPack2_tree6.glb",
  "elbolilloduro_modelPack2_box7.glb",
  "elbolilloduro_modelPack2_container3.glb",
  "elbolilloduro_modelPack2_tree7.glb",
  "elbolilloduro_modelPack2_box8.glb",
  "elbolilloduro_modelPack2_container4.glb",
  "elbolilloduro_modelPack2_tree8.glb",
  "elbolilloduro_modelPack2_box9.glb",
  "elbolilloduro_modelPack2_garbage1.glb",
  "elbolilloduro_modelPack2_tree9.glb",
  "elbolilloduro_modelPack2_bush1.glb",
  "elbolilloduro_modelPack2_garbage10.glb",
  "elbolilloduro_modelPack2_warehouse.glb",
  "elbolilloduro_modelPack2_bush10.glb",
  "elbolilloduro_modelPack2_garbage2.glb",
  "elbolilloduro_modelPack2_warehouseDoor.glb",
  "elbolilloduro_modelPack2_bush11.glb",
  "elbolilloduro_modelPack2_garbage3.glb",
  "elbolilloduro_modelPack2_warehouseNoDoor.glb",
  "elbolilloduro_modelPack2_bush12.glb",
  "elbolilloduro_modelPack2_garbage4.glb",
  "elbolilloduro_modelPack2_woodfence.glb",
  "elbolilloduro_modelPack2_bush13.glb",
  "elbolilloduro_modelPack2_garbage5.glb",
  "elbolilloduro_modelPack2_woodfence2.glb",
  "elbolilloduro_modelPack2_bush14.glb",
  "elbolilloduro_modelPack2_garbage6.glb",
  "elbolilloduro_modelPack2_woodfencepost.glb",
  "elbolilloduro_modelPack2_bush15.glb",
  "elbolilloduro_modelPack2_garbage7.glb",
  "elbolilloduro_modelPack2_garbage8.glb",
  "elbolilloduro_modelPack2_garbage9.glb",
  "elbolilloduro_trailerPark_airconditioning.glb",
  "elbolilloduro_trailerPark_couch.glb",
  "elbolilloduro_trailerPark_pan1.glb",
  "elbolilloduro_trailerPark_spices4.glb",
  "elbolilloduro_trailerPark_alarmClock.glb",
  "elbolilloduro_trailerPark_couch1.glb",
  "elbolilloduro_trailerPark_pic1.glb",
  "elbolilloduro_trailerPark_stewpot.glb",
  "elbolilloduro_trailerPark_alarmClock1.glb",
  "elbolilloduro_trailerPark_cup.glb",
  "elbolilloduro_trailerPark_pic2.glb",
  "elbolilloduro_trailerPark_stove.glb",
  "elbolilloduro_trailerPark_banana.glb",
  "elbolilloduro_trailerPark_cup1.glb",
  "elbolilloduro_trailerPark_pic3.glb",
  "elbolilloduro_trailerPark_table.glb",
  "elbolilloduro_trailerPark_bananas.glb",
  "elbolilloduro_trailerPark_cup2.glb",
  "elbolilloduro_trailerPark_pic4.glb",
  "elbolilloduro_trailerPark_table1.glb",
  "elbolilloduro_trailerPark_bed1.glb",
  "elbolilloduro_trailerPark_cup3.glb",
  "elbolilloduro_trailerPark_pic5.glb",
  "elbolilloduro_trailerPark_table2.glb",
  "elbolilloduro_trailerPark_bed2.glb",
  "elbolilloduro_trailerPark_cup4.glb",
  "elbolilloduro_trailerPark_pic6.glb",
  "elbolilloduro_trailerPark_toaster.glb",
  "elbolilloduro_trailerPark_blender.glb",
  "elbolilloduro_trailerPark_cup5.glb",
  "elbolilloduro_trailerPark_pic7.glb",
  "elbolilloduro_trailerPark_toilet.glb",
  "elbolilloduro_trailerPark_book1.glb",
  "elbolilloduro_trailerPark_curtain1.glb",
  "elbolilloduro_trailerPark_plant1.glb",
  "elbolilloduro_trailerPark_toiletpaper.glb",
  "elbolilloduro_trailerPark_book2.glb",
  "elbolilloduro_trailerPark_curtain2.glb",
  "elbolilloduro_trailerPark_plant2.glb",
  "elbolilloduro_trailerPark_toothbrush.glb",
  "elbolilloduro_trailerPark_book3.glb",
  "elbolilloduro_trailerPark_cutlery.glb",
  "elbolilloduro_trailerPark_plate1.glb",
  "elbolilloduro_trailerPark_trailer1.glb",
  "elbolilloduro_trailerPark_book4.glb",
  "elbolilloduro_trailerPark_cuttingboard.glb",
  "elbolilloduro_trailerPark_plate2.glb",
  "elbolilloduro_trailerPark_trailer1noDoor.glb",
  "elbolilloduro_trailerPark_book5.glb",
  "elbolilloduro_trailerPark_door1.glb",
  "elbolilloduro_trailerPark_plate3.glb",
  "elbolilloduro_trailerPark_trailerAC.glb",
  "elbolilloduro_trailerPark_book6.glb",
  "elbolilloduro_trailerPark_door2.glb",
  "elbolilloduro_trailerPark_pot1.glb",
  "elbolilloduro_trailerPark_trailerBase.glb",
  "elbolilloduro_trailerPark_book7.glb",
  "elbolilloduro_trailerPark_fence1.glb",
  "elbolilloduro_trailerPark_pot1Lid.glb",
  "elbolilloduro_trailerPark_trailerDoor.glb",
  "elbolilloduro_trailerPark_bookshelf.glb",
  "elbolilloduro_trailerPark_fenceLong.glb",
  "elbolilloduro_trailerPark_pot1noLid.glb",
  "elbolilloduro_trailerPark_trailerFence.glb",
  "elbolilloduro_trailerPark_brush1.glb",
  "elbolilloduro_trailerPark_fridge.glb",
  "elbolilloduro_trailerPark_pot2.glb",
  "elbolilloduro_trailerPark_bull.glb",
  "elbolilloduro_trailerPark_fuseBox1.glb",
  "elbolilloduro_trailerPark_pot2nolid.glb",
  "elbolilloduro_trailerPark_fuseBox2.glb",
  "elbolilloduro_trailerPark_powerPole.glb",
  "elbolilloduro_trailerPark_garbage1.glb",
  "elbolilloduro_trailerPark_powerPole1.glb",
  "elbolilloduro_trailerPark_garbage2.glb",
  "elbolilloduro_trailerPark_powerPost.glb",
  "elbolilloduro_trailerPark_garbage3.glb",
  "elbolilloduro_trailerPark_radiator.glb",
  "elbolilloduro_trailerPark_garbageCan.glb",
  "elbolilloduro_trailerPark_radio1.glb",
  "elbolilloduro_trailerPark_cereal1.glb",
  "elbolilloduro_trailerPark_garbageCanLid.glb",
  "elbolilloduro_trailerPark_radio2.glb",
  "elbolilloduro_trailerPark_cereal2.glb",
  "elbolilloduro_trailerPark_garbageCanNoLid.glb",
  "elbolilloduro_trailerPark_radio3.glb",
  "elbolilloduro_trailerPark_cereal3.glb",
  "elbolilloduro_trailerPark_radio4.glb",
  "elbolilloduro_trailerPark_tube.glb",
  "elbolilloduro_trailerPark_chair.glb",
  "elbolilloduro_trailerPark_kettle.glb",
  "elbolilloduro_trailerPark_radio5.glb",
  "elbolilloduro_trailerPark_tv.glb",
  "elbolilloduro_trailerPark_tv1.glb",
  "elbolilloduro_trailerPark_clotheslin7.glb",
  "elbolilloduro_trailerPark_kitchenBase.glb",
  "elbolilloduro_trailerPark_sal.glb",
  "elbolilloduro_trailerPark_tv2.glb",
  "elbolilloduro_trailerPark_tv3.glb",
  "elbolilloduro_trailerPark_clotheslin8.glb",
  "elbolilloduro_trailerPark_kitchenTop.glb",
  "elbolilloduro_trailerPark_satellite.glb",
  "elbolilloduro_trailerPark_vase1.glb",
  "elbolilloduro_trailerPark_vase2.glb",
  "elbolilloduro_trailerPark_vase3.glb",
  "elbolilloduro_trailerPark_vase4.glb",
  "elbolilloduro_trailerPark_vase5.glb",
  "elbolilloduro_trailerPark_vase6.glb",
  "elbolilloduro_trailerPark_lamp1.glb",
  "elbolilloduro_trailerPark_showerRack.glb",
  "elbolilloduro_trailerPark_lamp2.glb",
  "elbolilloduro_trailerPark_showerhandle.glb",
  "elbolilloduro_trailerPark_light.glb",
  "elbolilloduro_trailerPark_sink.glb",
  "elbolilloduro_trailerPark_meat1.glb",
  "elbolilloduro_trailerPark_sinkHandle.glb",
  "elbolilloduro_trailerPark_meat2.glb",
  "elbolilloduro_trailerPark_soap1.glb",
  "elbolilloduro_trailerPark_meat3.glb",
  "elbolilloduro_trailerPark_soap2.glb",
  "elbolilloduro_trailerPark_clotheslinePost.glb",
  "elbolilloduro_trailerPark_microwave.glb",
  "elbolilloduro_trailerPark_soap3.glb",
  "elbolilloduro_trailerPark_wastebin.glb",
  "elbolilloduro_trailerPark_coffee.glb",
  "elbolilloduro_trailerPark_oliveoil.glb",
  "elbolilloduro_trailerPark_spices1.glb",
  "elbolilloduro_trailerPark_coffee1.glb",
  "elbolilloduro_trailerPark_oliveoil1.glb",
  "elbolilloduro_trailerPark_spices2.glb",
  "elbolilloduro_trailerPark_cookware.glb",
  "elbolilloduro_trailerPark_pan.glb",
  "elbolilloduro_trailerPark_spices3.glb",
  "elbolilloduro_modelPack1_building1.glb",
  "elbolilloduro_modelPack1_building4.glb",
  "elbolilloduro_modelPack1_cabin2NoDoor.glb",
  "elbolilloduro_modelPack1_rock6.glb",
  "elbolilloduro_modelPack1_building10.glb",
  "elbolilloduro_modelPack1_building5.glb",
  "elbolilloduro_modelPack1_cabin2door.glb",
  "elbolilloduro_modelPack1_rock7.glb",
  "elbolilloduro_modelPack1_building11.glb",
  "elbolilloduro_modelPack1_building6.glb",
  "elbolilloduro_modelPack1_cabin3.glb",
  "elbolilloduro_modelPack1_rock8.glb",
  "elbolilloduro_modelPack1_building12.glb",
  "elbolilloduro_modelPack1_building7.glb",
  "elbolilloduro_modelPack1_cabin3door.glb",
  "elbolilloduro_modelPack1_building14.glb",
  "elbolilloduro_modelPack1_building8.glb",
  "elbolilloduro_modelPack1_cabin3noDoor.glb",
  "elbolilloduro_modelPack1_building15.glb",
  "elbolilloduro_modelPack1_building9.glb",
  "elbolilloduro_modelPack1_rock1.glb",
  "elbolilloduro_modelPack1_building16.glb",
  "elbolilloduro_modelPack1_cabin1.glb",
  "elbolilloduro_modelPack1_rock2.glb",
  "elbolilloduro_modelPack1_building17.glb",
  "elbolilloduro_modelPack1_cabin1door.glb",
  "elbolilloduro_modelPack1_rock3.glb",
  "elbolilloduro_modelPack1_building2.glb",
  "elbolilloduro_modelPack1_cabin1noDoor.glb",
  "elbolilloduro_modelPack1_rock4.glb",
  "elbolilloduro_modelPack1_building3.glb",
  "elbolilloduro_modelPack1_cabin2.glb",
  "elbolilloduro_modelPack1_rock5.glb",
] as const;
export type ObjectTypes = (typeof ObjectTypesEnum)[number];

export const EntityTypesSet = ['Zombie', 'Turret1'] as const;
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
