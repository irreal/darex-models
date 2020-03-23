export class BusinessPartner {
  id: number = 0;
  registrationNumber: number = 0;
  name: string = "";
  placeId: number = 0;
  address: string = "";
  organisationalUnit: number = 0;
  dateAdded?: Date;
  employeeId: number = 0;
  deleteDate?: Date;
  deletedByEmployee?: number;
  additionalName?: string;
  taxId: string = "";
  vat: string = "";
  internalNote?: string;
  mailingAddress?: string;
  email?: string;
  languageId?: number;
}
