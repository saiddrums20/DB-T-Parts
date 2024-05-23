import { Component, OnInit } from '@angular/core';
import data from "../../assets/DB.json";
import demandsData from '../../assets/DB_demand.json';

interface Demand {
  partNumber: string;
  po: string;
  date: string;
  status: string;
  comment: string;
}

interface Part {
  item: string;
  pdf: string;
  materials: Material[];
}

interface Material {
  id: string;
  description: string;
  colorId: string;
  quantity: string;
  metric: string;
  cutSize: string;
}

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss'],
})
export class DemandComponent implements OnInit {
  demands: Demand[] = demandsData;
  showModal: boolean = false;
  partDetail: any;

  colorMapping: { [key: string]: string } = {
    '2': '#d8b4fe',
    '3': '#a855f7',
    '4': '#581c87',
    '6': '#365314',
    '8': '#a3e635',
    '10': '#fb923c',
    '11': '#082f49',
    '12': '#0369a1',
    '16': '#fb7185',
    '25': '#0f766e',
    '33': '#bef264',
  };

  statuses = [
    {
      value: 'terminado',
      label: 'Terminado',
      class:
        'text-[#03543f] font-medium text-xs py-[0.125rem] px-[.625rem] bg-[#def7ec] rounded-[.375rem] mr-2',
    },
    {
      value: 'retrabajo',
      label: 'Re-Trabajo',
      class:
        'text-blue-800 font-medium text-xs py-[0.125rem] px-[.625rem] bg-blue-100 rounded-[.375rem] mr-2',
    },
    {
      value: 'cancelado',
      label: 'Cancelado',
      class:
        'text-red-800 font-medium text-xs py-[0.125rem] px-[.625rem] bg-red-100 rounded-[.375rem] mr-2',
    },
    {
      value: 'proceso',
      label: 'Proceso',
      class:
        'text-orange-800 font-medium text-xs py-[0.125rem] px-[.625rem] bg-orange-100 rounded-[.375rem] mr-2',
    },
    {
      value: 'espera',
      label: 'Espera',
      class:
        'text-yellow-800 font-medium text-xs py-[0.125rem] px-[.625rem] bg-yellow-100 rounded-[.375rem] mr-2',
    },
  ];

  constructor() {
    this.partDetail = '';
  }

  ngOnInit(): void {}

  findItemByItemProperty(
    items: Part[],
    itemProperty: string
  ): Part | undefined {
    return items.find((item) => item.item === itemProperty);
  }

  toggleModal(part: string) {
    this.partDetail = this.findItemByItemProperty(data, part);
    this.showModal = !this.showModal;
  }

  getBackgroundColor(colorId: string): string {
    return this.colorMapping[colorId] || '#ffffff'; // Default to white if colorId not found
  }

  openPdf(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }

  getStatusClass(status: string): string {
    const statusObj = this.statuses.find((s) => s.value === status);
    return statusObj ? statusObj.class : '';
  }
}
