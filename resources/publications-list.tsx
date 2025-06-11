import Link from "next/link"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PublicationsList() {
  const publications = [
    {
      id: 1,
      authors: "Vatsa Gandhi, Suraj Ravindran, Akshay Joshi, Guruswami Ravichandran",
      year: 2023,
      title:
        "Real-time characterization of dislocation slip and twinning of shock-compressed molybdenum single crystals",
      journal: "Physical Review Materials",
      doi: "#",
      url: "#",
    },
    {
      id: 2,
      authors: "Zifan Wang, Akshay Joshi, Angkur Jyoti Dipanka Shaikeea, Vikram Susdhir Deshpande",
      year: 2023,
      title: "Non-Speckle-based DVC for Measuring Large Deformations in Homogeneous Solids using Laboratory X-ray CT",
      journal: "arXiv",
      doi: "#",
      url: "#",
    },
    {
      id: 3,
      authors: "Suraj Ravindran, Vatsa Gandhi, Akshay Joshi, Guruswami Ravichandran",
      year: 2023,
      title:
        "Three-dimensional full-field velocity measurements in shock compression experiments using stereo digital image correlation",
      journal: "Review of Scientific Instruments",
      doi: "#",
      url: "#",
    },
    {
      id: 4,
      authors: "Prakash Thakolkaran, Akshay Joshi, Yiwen Zheng, Moritz Flaschel, Laura De Lorenzis, Siddhant Kumar",
      year: 2022,
      title: "NN-EUCLID: Deep-learning hyperelasticity without stress data",
      journal: "Journal of the Mechanics and Physics of Solids",
      doi: "#",
      url: "#",
    },
    {
      id: 5,
      authors:
        "Akshay Joshi, Prakash Thakolkaran, Yiwen Zheng, Maxime Escande, Moritz Flaschel, Laura De Lorenzis, Siddhant Kumar",
      year: 2022,
      title: "Bayesian-EUCLID: Discovering hyperelastic material laws with uncertainties",
      journal: "Computer Methods in Applied Mechanics and Engineering",
      doi: "#",
      url: "#",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {publications.map((pub) => (
        <div key={pub.id} className="flex gap-3">
          <div className="mt-1 text-muted-foreground">
            <FileText size={18} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {pub.authors} ({pub.year}).
            </p>
            <h3 className="font-medium text-primary hover:underline">
              <Link href="#">{pub.title}</Link>
            </h3>
            <p className="italic">{pub.journal}.</p>
            <div className="flex gap-2 mt-1">
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                Cite
              </Button>
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                DOI
              </Button>
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                URL
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
