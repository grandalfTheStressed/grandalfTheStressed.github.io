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
        description: "A physics solver designed to give objects a more animated, “rubber band” style of motion. The solver works with all transform types and was originally developed to improve procedural animations that felt too stiff. Beyond procedural animation, it’s particularly useful in Unity, which does not provide built-in support for wiggly or secondary motion bones.",
        media: [firstOrderDynamics1, firstOrderDynamics2, firstOrderDynamics3]
    },
    {
        title: "Parading Polygons Terrain Editor",
        description: "I was inspired by blog posts discussing 2D tileset generation using the marching squares algorithm and wondered whether the concept could be extended into 3D. This led me to experiment with marching cubes, a standard approach for voxel terrain generation, but it didn’t quite capture the distinct “2.5D tileset” look I was aiming for. After extensive experimentation, I developed a separate method for extending marching squares into the third dimension." +
            "\n" +
            "The formal name would probably be “Marching Non-planar Quadrilaterals,” but my father told me to call it Parading Polygons because its easier to say. " +
            "\n" +
            "The process was incredibly time consuming and potentially more automatable by someone smarter than me but I am extremely happy with these results.",
        media: [terrain1, terrain2, terrain3]
    },
    {
        title: "Deformable Car Physics",
        description: "Realtime deformable car physics. I always thought this would be incredibly hard to pull off, and that there must be a reason it’s mostly seen in games like GTA. It definitely wasn’t trivial and took a fair amount of experimentation, but the core idea turned out to be simpler than expected: restricted soft-body physics running on a lattice tied to the meshes, with deformation handled in the vertex shader.",
        media: [carDeform, carDeformPic1, carDeformPic2]
    },
    {
        title: "Realistic Car Physics",
        description: "I play a lot of indie games, and one thing that often stands out is how janky vehicle handling can feel compared to AAA titles, especially when driving isn’t the core focus of the game. I built this system to better understand how difficult it is to create car physics that actually feel good to drive." +
            "\n" +
            "The system supports FWD, RWD, and AWD configurations, with per-wheel physics based on suspension, traction, and acceleration. It also includes procedurally animated suspension. I’m currently working on an engine simulation to make acceleration feel more realistic, rather than immediate and constant."
    }
];
