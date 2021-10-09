import { make, uuid } from "utils/utils";
import faker from "faker";
import type { Tool, ProjectInfo } from "types/lib/content";

export const mockProject = ({
  id = uuid(),
  name = faker.name.findName(),
  image = faker.image.imageUrl(),
  paragraphs = make<string>(3).of(faker.lorem.sentence),
  websiteLink = faker.internet.url(),
  githubLink = faker.internet.url(),
}: Partial<ProjectInfo> = {}): ProjectInfo => ({
  id,
  name,
  image,
  paragraphs,
  websiteLink,
  githubLink,
});

export const mockTool = ({
  id = uuid(),
  name = faker.lorem.word(),
  logo = faker.image.dataUri(),
}: Partial<Tool> = {}): Tool => ({
  id,
  name,
  logo,
});
