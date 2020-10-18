export default function importModel(model) {
	return ({
	  provide: model.name,
	  useValue: model,
	})
}
