export interface DocSubItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  isNew?: boolean;
}

export interface DocSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  items?: DocSubItem[];
  badge?: string;
}
