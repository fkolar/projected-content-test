import {Entity} from '@ngx-metaui/rules';

/**
 * This is generated class
 */
export class User implements Entity {


  constructor(public uniqueName?: string, public name?: string,
              public description?: string, public created?: Date) {
  }

  identity(): string {
    return this.uniqueName;
  }


  getTypes(): any {
    return {
      uniqueName: String,
      name: String,
      description: String,
      created: Date
    };
  }


  /**
   * Used by MetaUI to identify the name of the class once everything is minified
   */
  className(): string {
    return 'User';
  }


  toString(): string {
    return this.name;
  }
}
