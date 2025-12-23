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
        description: "A physics solver designed to make objects move with a more animated, “rubber band” effect.\nThe solver works for all types of transforms.\nI originally developed it to improve procedural animations that looked too stiff.\nBeyond procedural animations, it is especially useful in Unity, which does not offer built-in support for wiggly bones.",
        media: [firstOrderDynamics1, firstOrderDynamics2, firstOrderDynamics3]
    },
    {
        title: "Parading Polygons Terrain Editor",
        description: "I was inspired by some blogs discussing tileset generation in 2D using the marching squares algorithm, and I wondered if I could extend this concept into 3D. That led me to experiment with marching cubes a standard method for voxel terrain generation, but it didn’t quite capture the distinct \"2.5D tileset\" look I wanted. After a lot of experimentation, I developed a separate method for expanding marching squares to the third dimension.\n" +
            "The formal name would probably be “Marching Non-planar Quadrilaterals,” but I decided to call it Parading Polygons because it has a much nicer ring to it. " +
            "\n" +
            "The process was incredibly time consuming and potentially more automatable by someone smarter than me but I am extremely happy with these results.",
        media: [terrain1, terrain2, terrain3]
    },
    {
        title: "Deformable Car Physics",
        description: "Realtime deformable car physics. I always assumed this would be crazy difficult, and that there had to be a reason the only game company that really had this was Rockstar with GTA. I wont say it was easy, because it took a bit, but the concept is not super complicated. Restricted soft body physics on a lattice linked to the meshes you want to deform. The mesh deformation is driven by the vertex shader",
        media: [carDeform, carDeformPic1, carDeformPic2]
    },
    {
        title: "Realistic Car Physics",
        description: "I play a lot of indie games, and one thing that stands out is how janky the cars often feel compared to AAA titles if the game isnt centered around driving. I made this because I wanted to understand how difficult it is to develop a system that feels good to drive.\nThis system allows for FWD, RWD, or AWD, with physics calculated per wheel based on suspension, traction, and acceleration. The simulation also includes procedurally animated suspension.\nI am currently working on an engine simulation to make acceleration feel more realistic, rather than an immediate and constant."
    }
];