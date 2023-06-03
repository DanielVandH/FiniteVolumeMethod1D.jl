var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = FiniteVolumeMethod1D","category":"page"},{"location":"#FiniteVolumeMethod1D","page":"Home","title":"FiniteVolumeMethod1D","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for FiniteVolumeMethod1D. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [FiniteVolumeMethod1D]","category":"page"},{"location":"#FiniteVolumeMethod1D.FVMGeometry","page":"Home","title":"FiniteVolumeMethod1D.FVMGeometry","text":"FVMGeometry{T}\n\nDefinition of the geometry for a finite volume method problem.\n\nFields\n\nmesh_points::T: The mesh points. Must be sorted.\nspacings::T: The spacings between the mesh points. \nvolumes::T: The volumes of the cells defined by the mesh points.\n\nConstructors\n\nTo construct the geometry, you can directly call the default constructor, \n\nFVMGeometry(mesh_points, spacings, volumes)\n\nor you can call the convenience constructor,\n\nFVMGeometry(mesh_points)\n\nwhich will compute the spacings and volumes for you.\n\nSee also FVMProblem.\n\n\n\n\n\n","category":"type"},{"location":"#FiniteVolumeMethod1D.FVMProblem","page":"Home","title":"FiniteVolumeMethod1D.FVMProblem","text":"FVMProblem{T,DF,DP,Dθ,RF,RP,Rθ,IC,FT}\n\nDefinition of an FVMProblem.\n\nFields\n\ngeometry::FVMGeometry{T}: The geometry of the problem.\ndiffusion_function::DF: The diffusion function.\ndiffusion_parameters::DP: The parameters for the diffusion function.\ndiffusion_theta::Dθ: The parameters for the diffusion function that are to be estimated.\nreaction_function::RF: The reaction function.\nreaction_parameters::RP: The parameters for the reaction function.\nreaction_theta::Rθ: The parameters for the reaction function that are to be estimated.\ninitial_condition::IC: The initial condition.\ninitial_time::FT: The initial time.\nfinal_time::FT: The final time.\n\nConstructors\n\nYou can use the default constructor, but we also provide the constructor \n\nFVMProblem(;\n    geometry, \n    diffusion_function,\n    diffusion_parameters = nothing,\n    diffusion_theta = nothing,\n    reaction_function = Returns(0.0),\n    reaction_parameters = nothing,\n    reaction_theta = nothing,\n    initial_condition,\n    initial_time = 0.0,\n    final_time)\n\nwhich provides some default values. Moreover, instead of providing geometry, you can use \n\nFVMProblem(mesh_points; kwargs...)\n\nwhich will construct geometry = FVMGeometry(mesh_points). The kwargs... are as above, except  without geometry of course.\n\nTo solve the FVMProblem, just use solve as you would in DifferentialEquations.jl. For example, \n\nsol = solve(prob, Tsit5(), saveat=0.1)\n\n\n\n\n\n","category":"type"}]
}
