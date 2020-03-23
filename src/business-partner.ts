import { field } from "@irreal/decorator-mapper";

export class BusinessPartner {
  @field("POSLOVNI_PARTNER#")
  id: number = 0;

  @field("MATICNI_BROJ")
  registrationNumber: number = 0;

  @field("NAZIV")
  name: string = "";

  @field("ID_MESTA")
  placeId: number = 0;

  @field("ADRESA")
  address: string = "";

  @field("ORGANIZACIONA_JEDINICA#")
  organisationalUnit: number = 0;

  @field("DATUM_OTVARANJA")
  dateAdded?: Date;

  @field("RADNIK#")
  employeeId: number = 0;

  @field("DATUM_BRISANJA")
  deleteDate?: Date;

  @field("OBRISAO_RADNIK")
  deletedByEmployee?: number;

  @field("DODATNI_NAZIV")
  additionalName?: string;

  @field("PIB")
  taxId: string = "";

  @field("PDV")
  vat: string = "";

  @field("INT_NAPOMENA")
  internalNote?: string;

  @field("ADR_ZA_SLANJE_POSTE")
  mailingAddress?: string;

  @field("EMAIL")
  email?: string;

  @field("JEZIK#")
  languageId?: number;
}
