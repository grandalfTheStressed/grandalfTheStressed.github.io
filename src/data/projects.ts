import terrain1 from "../img/TerrainEditor1.png";
import terrain2 from "../img/TerrainEditor2.png";
import terrain3 from "../img/TerrainEditor3.png";
import carDeform from "../img/CarDeformationVid.gif"
import carDeformPic1 from "../img/CarDeform1.png";
import carDeformPic2 from "../img/CarDeform2.png";
import firstOrderDynamics1 from "../img/FirstOrderDynamics (1).gif"
import firstOrderDynamics2 from "../img/FirstOrderDynamics (2).gif"
import firstOrderDynamics3 from "../img/FirstOrderDynamics (3).gif"

export type Project = {
    title: string;
    description: string;
    media?: string[];
};

export const projects: Project[] = [
    {
        title: "Second Order Dynamics",
        description: "A physics solver that gives transforms a springy, animated quality.\nI built it originally to loosen up procedural animations that felt too rigid. It also fills a gap in Unity, which has no native support for wiggly bones.",
        media: [firstOrderDynamics1, firstOrderDynamics2, firstOrderDynamics3]
    },
    {
        title: "Parading Polygons Terrain Editor",
        description: "Started as curiosity about whether marching squares could be used in 3D. Usually this leads to marching cubes, but they really arent the same algorithm and they dont generate similar structures, so I ended up developing my own method based off some visuals by a popular youtuber.",
        media: [terrain1, terrain2, terrain3]
    },
    {
        title: "Deformable Car Physics",
        description: "Realtime deformable car physics. I always assumed this would be crazy difficult, and that there had to be a reason the only game company that really had this was Rockstar with GTA. The concept is not super complicated. Just take a semi high resolution lattice to deform the mesh and then push it around on impact. \nUpon moving to Godot I could not find an existing lattice system so I additionally wrote a custom plugin that deforms the mesh through a compute shader. The lattice deform writes the deformation amount into a custom vertex attribute, which is then used to map paint scratches and glass cracks",
        media: [carDeform, carDeformPic1, carDeformPic2]
    },
    {
        title: "Realistic Car Physics",
        description: "Implemented a custom version of the Pacejka magic formula to simulate tire and suspension physics."
    }
];
