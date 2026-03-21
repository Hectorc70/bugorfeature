
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/common/components/button";
import type { IProject } from "@/models/project.model";
import { AiFillFolder } from "react-icons/ai";
import { FaBug, FaCircle, FaDotCircle, FaUsers } from "react-icons/fa";

const HomePage: React.FC = () => {
  const projects: IProject[] = [
    {
      id: 0, name: 'Project 1',
      description: 'Proyect donde voy a poner todos lo bugs sobre proyecto 1',
      created_at: '2023-01-01', updated_at: '2023-01-01',
      color: '#ad3e3e', short: 'P1', totalIssues: 10,
      totalComments: 5, totalUsers: 3, totalAttachments: 2
    },
    {
      id: 0, name: 'Project 1',
      description: 'Proyect donde voy a poner todos lo bugs sobre proyecto 1',
      created_at: '2023-01-01', updated_at: '2023-01-01',
      color: '#254eb7', short: 'P1', totalIssues: 10,
      totalComments: 5, totalUsers: 3, totalAttachments: 2
    },
    {
      id: 0, name: 'Project 1',
      description: 'Proyect donde voy a poner todos lo bugs sobre proyecto 1',
      created_at: '2023-01-01', updated_at: '2023-01-01',
      color: '#b76daa', short: 'P2', totalIssues: 10,
      totalComments: 5, totalUsers: 3, totalAttachments: 2
    },
    {
      id: 0, name: 'Project 1',
      description: 'Proyect donde voy a poner todos lo bugs sobre proyecto 1',
      created_at: '2023-01-01', updated_at: '2023-01-01',
      color: '#86ad3e', short: 'P3', totalIssues: 10,
      totalComments: 5, totalUsers: 3, totalAttachments: 2
    },
    {
      id: 0, name: 'Project 1',
      description: 'Proyect donde voy a poner todos lo bugs sobre proyecto 1',
      created_at: '2023-01-01', updated_at: '2023-01-01',
      color: '#3e6cad', short: 'P4', totalIssues: 10,
      totalComments: 5, totalUsers: 3, totalAttachments: 2
    },
    {
      id: 0, name: 'Project 1',
      description: 'Proyect donde voy a poner todos lo bugs sobre proyecto 1',
      created_at: '2023-01-01', updated_at: '2023-01-01',
      color: '#3ead91', short: 'P5', totalIssues: 10,
      totalComments: 5, totalUsers: 3, totalAttachments: 2
    }
  ]

  return (
    <div className="space-y-6">
      {/* SALUDO */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-colorText">
            Buenos días
          </h1>
          <p className="text-sm text-colorGrey">
            Tienes {projects.length} proyectos activos con {projects.reduce((total, project) => total + project.totalIssues, 0)} problemas
          </p>
        </div>
        <Button
          variant="primary"
        >
          Crear Proyecto
        </Button>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* PROYECTOS */}
        <div className="bg-linear-to-br from-[#f1d501] to-[#d4b800] rounded-xl p-4 text-white flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs">Proyectos</p>
            <p className="text-xl font-semibold">
              {projects.length}
            </p>
          </div>
          <AiFillFolder className="text-lg" />
        </div>

        {/* BUGS */}
        <div className="bg-linear-to-br from-[#df4646] to-[#b93838] text-white rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs ">Bugs</p>
            <p className="text-xl font-semibold ">
              5
            </p>
          </div>
          <FaBug className="text-lg " />
        </div>

        {/* USUARIOS */}
        <div className="bg-linear-to-br  from-[#466fdf] to-[#25408a] text-white rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <p className="text-xs ">Miembros</p>
            <p className="text-xl font-semibold">
              3
            </p>
          </div>
          <FaUsers className="text-lg" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-colorText">
            Últimos proyectos
          </h2>
          <p className="text-sm text-colorGrey">
            Actividad reciente y proyectos activos
          </p>
        </div>

        <button className="text-sm text-primary hover:underline cursor-pointer">
          Ver todos
        </button>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-hintColor rounded-xl p-3  hover:shadow-md transition cursor-pointer"
          >
            {/* TOP CARD */}
            <div
              className="h-28 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              style={{ background: project.color }}
            >
              {project.short}
            </div>

            {/* CONTENT */}
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-colorText truncate">
                {project.name}
              </h3>

              <p className="text-xs text-colorGrey line-clamp-2 mt-1">
                {project.description}
              </p>

              {/* META */}
              <div className="flex items-center justify-between text-xs text-colorGrey mt-2">
                <span><FaDotCircle className="text-red-400" /> {project.totalIssues}</span>
                <span><FaUsers /> {project.totalUsers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );

}


export default HomePage;