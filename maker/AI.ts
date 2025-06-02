import { network } from 'libx.js/build/modules/network.js';
import { libx } from 'libx.js/build/bundles/essentials.js';

export class AiModule {
    private baseUrl: string;
	private baseUrlLocal = `http://0.0.0.0:59898`;
    private baseUrlProd = `https://ws-edge-v2.feedox.workers.dev`;

	public constructor(public options?: Partial<ModuleOptions>) {
		this.options = { ...new ModuleOptions(), ...options };

		this.baseUrl = this.options.isLocal ? this.baseUrlLocal : this.baseUrlProd;
        // libx.log.v('AiModule:ctor: baseUrl:', this.baseUrl);
	}

	public async runPrompt(promptId: string, variables: any, messages: any[], config?: any) {
        const url = `${this.baseUrl}/completion/${config?.wsId ?? this.options.workspaceId}/${promptId}`;

        if (config?.wsId) {
            delete config.wsId;
        }

        const res: Response = await network.httpPost(url, {
                variables,
                messages,
                config: {
                    temperature: 0.1,
                    stream: true,
                    ...config,
                },
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
		);

		let ret = res.toString();
        return ret;
    }
	
}

export class ModuleOptions {
    isLocal = false;
    workspaceId = '6ab03c56d720b34033c2d06ef9ba6cdf';
}

export interface IConvMessage {
	role: 'system' | 'user' | 'assistant';
	content: string;
	name?: string;
	type?: IConvMessageType;
	files?: IFile[];
}

export enum IConvMessageType {
	text,
	image,
	audio,
}

export interface IFile {
	url: string;
	type?: string;
}
