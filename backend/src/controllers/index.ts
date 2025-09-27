import { Request, Response } from "express";
import { ApartmentCreateData } from "../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const index = async (req: Request, res: Response) => {
  
  try {
    const { search, project, minRent, maxRent, bedrooms } = req.query;

    const where: any = {};

    // Search functionality
    if (search) {
      where.OR = [
        { unitName: { contains: search as string, mode: "insensitive" } },
        { unitNumber: { contains: search as string, mode: "insensitive" } },
        { project: { contains: search as string, mode: "insensitive" } },
      ];
    }

    // Filter by project
    if (project) {
      where.project = { contains: project as string, mode: "insensitive" };
    }

    // Filter by rent range
    if (minRent || maxRent) {
      where.rent = {};
      if (minRent) where.rent.gte = parseFloat(minRent as string);
      if (maxRent) where.rent.lte = parseFloat(maxRent as string);
    }

    // Filter by bedrooms
    if (bedrooms) {
      where.bedrooms = parseInt(bedrooms as string);
    }

    const apartments = await prisma.apartment.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    res.json({
      success: true,
      data: apartments,
    });
  } catch (error) {
    console.error("Error fetching apartments:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch apartments",
    });
  }
};

export const show  =  async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    
    const apartment = await prisma.apartment.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!apartment) {
      return res.status(404).json({
        success: false,
        error: 'Apartment not found'
      });
    }
    
    res.json({
      success: true,
      data: apartment
    });
  } catch (error) {
    console.error('Error fetching apartment details:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch apartment details'
    });
  }
}

export const store = async (req: Request, res: Response) => {
  try {
    const apartmentData: ApartmentCreateData = req.body;

    // Validation
    if (!apartmentData.unitName || !apartmentData.unitNumber || !apartmentData.project) {
      return res.status(400).json({
        success: false,
        error: "Unit name, unit number, and project are required",
      });
    }

    const apartment = await prisma.apartment.create({
      data: {
        unitName: apartmentData.unitName,
        unitNumber: apartmentData.unitNumber,
        project: apartmentData.project,
        bedrooms: apartmentData.bedrooms,
        bathrooms: apartmentData.bathrooms,
        area: apartmentData.area,
        rent: apartmentData.rent,
        description: apartmentData.description,
        imageUrl: apartmentData.imageUrl,
        address: apartmentData.address,
        amenities: apartmentData.amenities || [],
      },
    });

    return res.status(201).json({
      success: true,
      data: apartment,
    });
  } catch (error: any) {
    console.error("Error creating apartment:", error);

    // Prisma-specific error handling
    if (error.code === "P2002") {
      // Unique constraint failed (e.g., unitNumber must be unique)
      return res.status(400).json({
        success: false,
        error: `Duplicate value for field: ${error.meta?.target}`,
      });
    }

    // Generic fallback
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to create apartment",
    });
  }
};
