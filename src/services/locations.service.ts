import * as locationRepository from "../repositories/locations.repository";
import {
  CreateLocationRequest,
  UpdateLocationRequest,
} from "../requests/locationRequests";

export async function getAll() {
  return locationRepository.getAll();
}

export async function getById(id: number) {
  const location = await locationRepository.getById(id);

  if (!location) {
    throw new Error("Location not found");
  }

  return location;
}

export async function create(
  request: CreateLocationRequest,
  currentUserId: number,
) {
  return locationRepository.create(request, currentUserId);
}

export async function update(
  id: number,
  request: UpdateLocationRequest,
  currentUserId: number,
) {
  const location = await locationRepository.getById(id);

  if (!location) {
    throw new Error("Location not found");
  }

  await locationRepository.update(id, request, currentUserId);
}

export async function remove(id: number, currentUserId: number) {
  const location = await locationRepository.getById(id);

  if (!location) {
    throw new Error("Location not found");
  }

  await locationRepository.remove(id, currentUserId);
}
